// ✅ OurShop AI Dashboard - index.js (최종본)
// - 카테고리 판매 비중: 도넛 + 중앙 TOP1 + 하단 TOP3 리스트(툴팁 없이도 읽힘)
// - 성별 구매 비중: 수평 막대 2개(남/여 라벨 + % 항상 표시)
// - 월별 매출 추이: 라인 그래프 유지

// ✅ STEP 1: 전역 변수
let modelData = null;
// ✅ STEP 2: 모델 결과 로드
async function loadModelData() {
    try {
        // js/index.js 기준: 프로젝트 루트의 modelResults.js
        const module = await import('../modelResults.js');
        modelData = module.modelResults;

        console.log('✅ 모델 데이터 로드 완료:', modelData);
        console.log('📊 총 예측 샘플:', modelData.predictions.length);

        initCharts();
    } catch (error) {
        console.error('❌ 데이터 로드 실패:', error);
        alert('모델 데이터를 불러오는데 실패했습니다.\nmodelResults.js 경로/위치를 확인해주세요.');
    }
}

// ✅ STEP 3: 차트/지표 초기화
function initCharts() {
    if (!modelData) return;

    // =========================
    // 1) 카테고리별 판매 비중 (직관성 강화)
    // - 도넛 + 중앙 TOP1 표시
    // - 하단 TOP3 리스트(라벨+비율)
    // =========================
    renderCategoryDoughnut();

    // =========================
    // 2) 성별 구매 비중 (직관성 강화)
    // - 남/여 라벨 + % 항상 표시
    // =========================
    renderGenderBars();

    // =========================
    // 3) 월별 매출 추이 (라인 그래프)
    // =========================
    renderMonthlyLine();

}

/* =========================================================
   [A] 카테고리 도넛 + 중앙 TOP1 + TOP3 리스트
   요구사항:
   - 마우스 올리지 않아도 카테고리/비율이 보이게
========================================================= */
function renderCategoryDoughnut() {
    const categoryStats = modelData.category_statistics || [];

    if (!categoryStats.length) {
        console.warn('category_statistics가 비어있습니다.');
        return;
    }

    // 내림차순 정렬
    const sorted = [...categoryStats].sort((a, b) => b.total_orders - a.total_orders);

    // 총합
    const totalOrders = sorted.reduce((s, c) => s + (c.total_orders || 0), 0) || 1;

    // TOP1
    const top1 = sorted[0];
    const top1Pct = Math.round((top1.total_orders / totalOrders) * 100);

    // 도넛 차트 데이터
    const labels = sorted.map(c => c.category_name);
    const values = sorted.map(c => c.total_orders);

    // ✅ Chart.js 도넛 생성
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;

    // 기존 차트가 누적 생성되는 경우 방지
    if (ctx._chart) {
        ctx._chart.destroy();
        ctx._chart = null;
    }

    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                data: values,
                // 카드 배경이 컬러라서, 내부는 화이트 계열로 통일(가독성)
                backgroundColor: ['#fff', '#ffffffcc', '#ffffff99', '#ffffff66', '#ffffff44'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true } // 툴팁은 보조(있어도 좋음)
            }
        },
        plugins: [
            // ✅ 중앙 텍스트(Top1 + 비율) 렌더링 플러그인
            {
                id: 'centerText',
                afterDraw(chartInstance) {
                    const { ctx, chartArea } = chartInstance;
                    if (!chartArea) return;

                    const centerX = (chartArea.left + chartArea.right) / 2;
                    const centerY = (chartArea.top + chartArea.bottom) / 2;

                    ctx.save();
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    // 위쪽: TOP1 카테고리명
                    ctx.fillStyle = '#ffffff';
                    ctx.font = '700 13px Inter, sans-serif';
                    ctx.fillText(top1.category_name, centerX, centerY - 10);

                    // 아래쪽: TOP1 비율
                    ctx.font = '800 18px Inter, sans-serif';
                    ctx.fillText(`${top1Pct}%`, centerX, centerY + 12);

                    ctx.restore();
                }
            }
        ]
    });

    // 차트 인스턴스 저장(중복 생성 방지용)
    ctx._chart = chart;

    // ✅ 카드 설명(기존 문구 유지하되 직관적으로)
    const categoryDesc = document.getElementById('categoryDesc');
    if (categoryDesc) {
        categoryDesc.innerText =
            `${top1.category_name}이(가) ${top1Pct}% (${top1.total_orders}건)로 가장 많이 판매되었습니다.`;
    }

    // ✅ TOP3 리스트(툴팁 없이도 읽히게)
    // HTML에 아래 컨테이너가 있으면 자동으로 채움:
    // <div id="categoryTopList"></div>
    // 없으면 JS가 생성해서 card 안에 넣음
    const card = ctx.closest('.card');
    if (!card) return;

    let listBox = document.getElementById('categoryTopList');
    if (!listBox) {
        listBox = document.createElement('div');
        listBox.id = 'categoryTopList';
        // 카드 안에서 desc 위/아래 어디든 가능. 여기서는 desc 바로 위에 넣음
        const descEl = document.getElementById('categoryDesc');
        if (descEl && descEl.parentNode === card) {
            card.insertBefore(listBox, descEl);
        } else {
            card.appendChild(listBox);
        }
    }

    // TOP3 생성
    const top3 = sorted.slice(0, 3).map(c => {
        const pct = Math.round((c.total_orders / totalOrders) * 100);
        return { name: c.category_name, pct };
    });

    // 리스트 HTML (화이트 텍스트로 고정)
    listBox.innerHTML = `
        <div style="margin-top:10px; display:flex; flex-direction:column; gap:6px;">
            ${top3.map((t, i) => `
                <div style="display:flex; justify-content:space-between; font-size:13px; font-weight:${i === 0 ? 800 : 700}; opacity:${i === 0 ? 1 : 0.92};">
                    <span>${t.name}</span>
                    <span>${t.pct}%</span>
                </div>
            `).join('')}
        </div>
    `;
}

/* =========================================================
   [B] 성별 구매 비중 - 수평 막대 2개 (직관성)
   전제: HTML에 아래 요소들이 존재해야 함
   - gBarM, gValM, gBarF, gValF, genderDesc
========================================================= */
function renderGenderBars() {
    const stats = calculateGenderStats();
    const total = (stats.M + stats.F) || 1;

    const mPercent = Math.round((stats.M / total) * 100);
    const fPercent = 100 - mPercent;

    const gValM = document.getElementById('gValM');
    const gValF = document.getElementById('gValF');
    const gBarM = document.getElementById('gBarM');
    const gBarF = document.getElementById('gBarF');
    const genderDesc = document.getElementById('genderDesc');
    const kpiM = document.getElementById('genderKpiM');
    const kpiF = document.getElementById('genderKpiF');
    if (gValM) gValM.innerText = `${mPercent}%`;
    if (gValF) gValF.innerText = `${fPercent}%`;
    if (kpiM) kpiM.innerText = `남성 ${mPercent}% (${stats.M}건)`;
    if (kpiF) kpiF.innerText = `여성 ${fPercent}% (${stats.F}건)`;
    setTimeout(() => {
        if (gBarM) gBarM.style.width = `${mPercent}%`;
        if (gBarF) gBarF.style.width = `${fPercent}%`;
    }, 50);

    if (genderDesc) {
        genderDesc.innerText =
            `남성 ${mPercent}% · 여성 ${fPercent}% (${mPercent >= 50 ? '남성이 조금 더 많음' : '여성이 조금 더 많음'})`;
    }
}

// ✅ 성별 통계 계산 헬퍼
function calculateGenderStats() {
    const stats = { M: 0, F: 0 };

    (modelData.predictions || []).forEach(p => {
        const g = p.customer_info?.gender;
        if (g === 'M') stats.M += 1;
        else if (g === 'F') stats.F += 1;
    });

    return stats;
}

/* =========================================================
   [C] 월별 매출 추이 (라인 그래프)
   전제: HTML에 monthlyChart, monthlyDesc 존재
========================================================= */
function renderMonthlyLine() {
    const monthlyRevenue = calculateMonthlyRevenue();

    const ctx = document.getElementById('monthlyChart');
    if (!ctx) return;

    // 기존 차트 누적 방지
    if (ctx._chart) {
        ctx._chart.destroy();
        ctx._chart = null;
    }

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [{
                label: '월별 매출',
                data: monthlyRevenue,
                borderColor: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.25)',
                tension: 0.35,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#ffffff' }, grid: { display: false } },
                y: {
                    ticks: {
                        color: '#ffffff',
                        callback: value => (value / 1000000).toFixed(0) + 'M'
                    },
                    grid: { color: 'rgba(255,255,255,0.2)' }
                }
            }
        }
    });

    ctx._chart = chart;

    const maxMonth = monthlyRevenue.indexOf(Math.max(...monthlyRevenue)) + 1;
    const monthlyDesc = document.getElementById('monthlyDesc');
    if (monthlyDesc) {
        monthlyDesc.innerText =
            `${maxMonth}월 매출이 가장 높으며, 연중 매출 추세를 한눈에 확인할 수 있습니다.`;
    }
}

// ✅ 월별 매출 계산 함수
function calculateMonthlyRevenue() {
    const monthly = Array(12).fill(0);

    (modelData.predictions || []).forEach(p => {
        const month = p.order_info?.month; // 1~12
        const price = p.order_info?.price || 0;
        if (month >= 1 && month <= 12) {
            monthly[month - 1] += price;
        }
    });

    return monthly;
}

/* =========================================================
   [D] AI 추천 분석 기능(기존 유지)
========================================================= */
window.startAnalysis = function () {
    if (!modelData) {
        alert('데이터가 아직 로드되지 않았습니다. 페이지를 새로고침해주세요.');
        return;
    }

    // 입력값 가져오기
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const price = parseInt(document.getElementById('price').value);
    const month = parseInt(document.getElementById('month').value);

    // 입력값 검증
    if (isNaN(age) || age < 18 || age > 100) {
        alert('나이를 올바르게 입력해주세요 (18-100)');
        return;
    }
    if (isNaN(price) || price < 0) {
        alert('가격을 올바르게 입력해주세요.');
        return;
    }

    // UI 업데이트
    document.getElementById('init-msg').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    document.getElementById('final-result').style.display = 'none';

    // 로딩 효과
    setTimeout(() => {
        const result = predictCategory(age, gender, price, month);
        displayResults(result, age, gender);
    }, 500);
};

// ✅ 카테고리 예측 로직 (유사도 기반)
function predictCategory(age, gender, price, month) {
    const predictions = modelData.predictions || [];

    let bestMatch = predictions[0];
    let minDistance = Infinity;

    predictions.forEach(pred => {
        const ageDiff = Math.abs(pred.customer_info.age - age);
        const genderDiff = (pred.customer_info.gender === gender) ? 0 : 10;
        const priceDiff = Math.abs(pred.order_info.price - price) / 100000;
        const monthDiff = Math.abs(pred.order_info.month - month) * 2;

        const totalDistance = ageDiff + genderDiff + priceDiff + monthDiff;

        if (totalDistance < minDistance) {
            minDistance = totalDistance;
            bestMatch = pred;
        }
    });

    return {
        top1: {
            category_code: bestMatch.predictions[0].category_code,
            category_name: bestMatch.predictions[0].category_name,
            probability: Math.round(bestMatch.predictions[0].probability * 100)
        },
        top2: {
            category_code: bestMatch.predictions[1].category_code,
            category_name: bestMatch.predictions[1].category_name,
            probability: Math.round(bestMatch.predictions[1].probability * 100)
        },
        matchedSample: bestMatch
    };
}

// ✅ 결과 표시 함수
function displayResults(result, age, gender) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('final-result').style.display = 'block';

    // 모델 성능 정보
    const perf = modelData.model_performance.accuracy;
    document.getElementById('res-model').innerText =
        `XGBoost 모델 (Top-1 정확도: ${perf.top1_accuracy_percent})`;
    document.getElementById('res-accuracy').innerText =
        `Top-2 정확도: ${perf.top2_accuracy_percent} | 테스트 샘플: ${modelData.model_performance.dataset_info.test_samples}개`;

    // 1순위 추천 결과
    const genderKor = gender === 'M' ? '남성' : '여성';
    document.getElementById('res-predict').innerText =
        `추천 카테고리: ${result.top1.category_name}`;
    document.getElementById('res-detail').innerText =
        `${age}세 ${genderKor} 고객에게 가장 적합한 카테고리입니다. AI 모델이 ${result.top1.probability}% 확률로 예측했습니다.`;

    // 프로그레스 바 애니메이션
    setTimeout(() => {
        document.getElementById('res-bar').style.width = result.top1.probability + '%';
    }, 100);

    // 2순위 추천 결과
    document.getElementById('res-second').innerText =
        `2순위: ${result.top2.category_name} (${result.top2.probability}%)`;

    setTimeout(() => {
        document.getElementById('res-bar2').style.width = result.top2.probability + '%';
    }, 200);
}

/* =========================================================
   [E] 초기 실행
========================================================= */
window.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 페이지 로드 완료. 데이터 로딩 시작...');
    loadModelData();
    initClusterViz();
});

// ✅ 전역 에러 핸들링
window.addEventListener('error', (event) => {
    console.error('전역 에러 발생:', event.error);
});
let clusterChartInstance = null;
let clusterRaw = null;

async function loadClusterData() {
    // 권장: data 폴더를 만들고 그 안에 cluster_points.json 배치
    // 예) project1/data/cluster_points.json
    const res = await fetch("data/cluster_points.json", { cache: "no-store" });
    if (!res.ok) throw new Error("cluster_points.json 로드 실패");
    return await res.json();
}

function buildClusterDatasets(points, filterValue) {
    const byCluster = new Map();

    for (const p of points) {
        if (filterValue !== "all" && String(p.cluster) !== String(filterValue)) continue;
        if (!byCluster.has(p.cluster)) byCluster.set(p.cluster, []);
        byCluster.get(p.cluster).push({
            x: p.x,
            y: p.y,
            _meta: p // tooltip용 원본
        });
    }
    const clusterNameMap = {
        0: " 고가 구매 남성 고객",
        1: " 실속형 여성 고객",
        2: " 모바일 쇼핑 선호 고객",
        3: " 충성도 높은 반복 구매 고객"
    };
     const datasets = [];
  for (const [clusterId, arr] of byCluster.entries()) {
    const name = clusterNameMap[clusterId] || `Cluster ${clusterId}`;

    datasets.push({
      label: name,          // ✅ 범례 + 툴팁에 이 이름이 표시됨
      data: arr,
      pointRadius: 4
    });
  }
  return datasets;
}

function renderClusterChart(clusterJson, filterValue = "all") {
    const ctx = document.getElementById("clusterChart");
    if (!ctx) return;

    const datasets = buildClusterDatasets(clusterJson.points, filterValue);

    if (clusterChartInstance) clusterChartInstance.destroy();

    clusterChartInstance = new Chart(ctx, {
        type: "scatter",
        data: { datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const d = context.raw?._meta;
                            if (!d) return context.dataset.label;
                            // tooltip 구성 (필요한 항목만)
                            return [
                                `${context.dataset.label}`,
                                `age: ${d.age}, gender: ${d.gender}`,
                                `price: ${Number(d.price).toLocaleString()}원, month: ${d.month}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: "Embedding X" } },
                y: { title: { display: true, text: "Embedding Y" } }
            }
        }
    });

    const desc = document.getElementById("clusterDesc");
    if (desc) {
        const meta = clusterJson.meta || {};
        desc.textContent = `방법: ${meta.method || "N/A"}, k=${meta.k ?? "N/A"}, 임베딩: ${meta.embedding || "N/A"} · 점 수: ${clusterJson.points?.length || 0}`;
    }
}

async function initClusterViz() {
    try {
        clusterRaw = await loadClusterData();
        renderClusterChart(clusterRaw, "all");

        const filter = document.getElementById("clusterFilter");
        if (filter) {
            filter.addEventListener("change", (e) => {
                renderClusterChart(clusterRaw, e.target.value);
            });
        }
    } catch (err) {
        console.error(err);
        const desc = document.getElementById("clusterDesc");
        if (desc) desc.textContent = "군집 시각화 데이터를 불러오지 못했습니다. (data/cluster_points.json 확인)";
    }
}

