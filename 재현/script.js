// ✅ STEP 1: 전역 변수 선언
let modelData = null;

// ✅ STEP 2: JSON 데이터 로드 함수
async function loadModelData() {
    try {
        // modelResults.js를 동적으로 import
        const module = await import('./modelResults.js');
        modelData = module.modelResults;
        
        console.log('✅ 모델 데이터 로드 완료:', modelData);
        console.log('📊 총 예측 샘플:', modelData.predictions.length);
        console.log('🎯 모델 정확도:', modelData.model_performance.accuracy);
        
        // 데이터 로드 후 차트 초기화
        initCharts();
        
    } catch (error) {
        console.error('❌ 데이터 로드 실패:', error);
        alert('모델 데이터를 불러오는데 실패했습니다.\nmodelResults.js 파일이 같은 폴더에 있는지 확인해주세요.');
    }
}

// ✅ STEP 3: 차트 초기화 함수
function initCharts() {
    if (!modelData) {
        console.error('모델 데이터가 없습니다.');
        return;
    }

    const chartOptions = {
        plugins: { 
            legend: { display: false }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    // ========== 카테고리별 판매 차트 ==========
    const categoryStats = modelData.category_statistics;
    const categoryLabels = categoryStats.map(c => c.category_name);
    const categoryValues = categoryStats.map(c => c.total_orders);
    
    new Chart(document.getElementById('categoryChart'), {
        type: 'doughnut',
        data: {
            labels: categoryLabels,
            datasets: [{
                data: categoryValues,
                backgroundColor: ['#fff', '#ffffff99', '#ffffff66', '#ffffff44']
            }]
        },
        options: chartOptions
    });

    // 가장 많이 팔린 카테고리
    const maxCategory = categoryStats.reduce((max, c) => 
        c.total_orders > max.total_orders ? c : max
    );
    document.getElementById('categoryDesc').innerText = 
        `${maxCategory.category_name}이(가) ${maxCategory.total_orders}건으로 가장 많이 판매되었습니다.`;

    // ========== 성별 구매 차트 ==========
    const genderStats = calculateGenderStats();
    
    new Chart(document.getElementById('genderChart'), {
        type: 'pie',
        data: {
            labels: ['남성', '여성'],
            datasets: [{
                data: [genderStats.M, genderStats.F],
                backgroundColor: ['#fff', '#ffffff88']
            }]
        },
        options: chartOptions
    });

    const genderPercent = Math.round(genderStats.M / (genderStats.M + genderStats.F) * 100);
    document.getElementById('genderDesc').innerText = 
        `남성 고객이 ${genderPercent}%를 차지합니다.`;

    // ========== 페르소나별 매출 차트 ==========
    const personaRevenue = categoryStats.reduce((acc, cat) => {
        ['A', 'B', 'C', 'D'].forEach(p => {
            acc[p] = (acc[p] || 0) + (cat.by_persona[p]?.total_revenue || 0);
        });
        return acc;
    }, {});

    new Chart(document.getElementById('ageChart'), {
        type: 'bar',
        data: {
            labels: ['페르소나 A', 'B', 'C', 'D'],
            datasets: [{
                data: [personaRevenue.A, personaRevenue.B, personaRevenue.C, personaRevenue.D],
                backgroundColor: '#fff'
            }]
        },
        options: chartOptions
    });

    const maxPersona = Object.entries(personaRevenue).reduce((max, [k, v]) => 
        v > max[1] ? [k, v] : max, ['', 0]);
    
    const maxRevenueFormatted = Math.round(maxPersona[1] / 1000000);
    document.getElementById('ageDesc').innerText = 
        `페르소나 ${maxPersona[0]}의 총 매출이 약 ${maxRevenueFormatted}백만원으로 가장 높습니다.`;
}

// ✅ STEP 4: 성별 통계 계산 헬퍼 함수
function calculateGenderStats() {
    const stats = { M: 0, F: 0 };
    
    modelData.predictions.forEach(p => {
        const gender = p.customer_info.gender;
        stats[gender] = (stats[gender] || 0) + 1;
    });
    
    return stats;
}

// ✅ STEP 5: AI 추천 분석 함수 (메인 로직)
window.startAnalysis = function() {
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

    console.log('🔍 분석 시작:', { age, gender, price, month });

    // UI 업데이트
    document.getElementById('init-msg').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    document.getElementById('final-result').style.display = 'none';

    // 실제 분석 실행 (0.5초 후 - 로딩 효과)
    setTimeout(() => {
        const result = predictCategory(age, gender, price, month);
        displayResults(result, age, gender);
    }, 500);
};

// ✅ STEP 6: 카테고리 예측 로직 (유사도 기반)
function predictCategory(age, gender, price, month) {
    const predictions = modelData.predictions;
    
    let bestMatch = predictions[0];
    let minDistance = Infinity;

    // 입력값과 가장 유사한 샘플 찾기
    predictions.forEach(pred => {
        // 유사도 계산 (거리 기반)
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

    console.log('🎯 가장 유사한 샘플:', bestMatch);
    console.log('📏 유사도 거리:', minDistance);

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

// ✅ STEP 7: 결과 표시 함수
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

    console.log('✅ 결과 표시 완료');
}

// ✅ STEP 8: 페이지 로드 시 자동 실행
window.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 페이지 로드 완료. 데이터 로딩 시작...');
    loadModelData();
});

// ✅ STEP 9: 에러 핸들링
window.addEventListener('error', (event) => {
    console.error('전역 에러 발생:', event.error);
});