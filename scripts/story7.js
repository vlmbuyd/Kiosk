// story7.js
function setup() {
  noCanvas(); // p5.js의 기본 캔버스를 사용하지 않음

  // next_btn 요소를 선택
  let nextButton = select('#next_btn');

  // next_btn 클릭 이벤트 핸들러 설정
  nextButton.mousePressed(() => {
    window.location.href = 'story8.html'; // 이동할 페이지 URL
  });
}