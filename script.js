/* ===== 더미 통계 데이터 (규칙 기반) ===== */
const statsData = {
  category: [
    { label: "스마트폰", value: 45 },
    { label: "노트북", value: 30 },
    { label: "키보드", value: 15 },
    { label: "마우스", value: 10 }
  ],
  ageGender: [
    { label: "20대 여성", value: 35 },
    { label: "20대 남성", value: 25 },
    { label: "30대 남성", value: 20 },
    { label: "30대 여성", value: 20 }
  ],
  monthly: [
    { label: "6월", value: 20 },
    { label: "7월", value: 35 },
    { label: "8월", value: 45 }
  ]
};

const chartArea = document.getElementById("chartArea");
const select = document.getElementById("patternSelect");

/* ===== 그래프 렌더링 ===== */
function renderChart(type) {
  chartArea.innerHTML = "";

  statsData[type].forEach(item => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.width = item.value + "%";
    bar.innerText = `${item.label} (${item.value}%)`;
    chartArea.appendChild(bar);
  });
}

/* 초기 로딩 */
renderChart("category");

/* 변경 이벤트 */
select.addEventListener("change", (e) => {
  renderChart(e.target.value);
});
