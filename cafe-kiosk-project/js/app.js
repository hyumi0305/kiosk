// 카페 키오스크 첫 화면 동작
// 다음 개발 단계에서 메뉴 선택, 장바구니, 결제 기능을 이 파일에 추가합니다.

const startScreen = document.querySelector("#start-screen");
const nextScreen = document.querySelector("#next-screen");
const selectedType = document.querySelector("#selected-type");
const backButton = document.querySelector("#back-button");
const menuButton = document.querySelector("#menu-button");
const message = document.querySelector("#message");

const orderTypeLabels = {
  "dine-in": "매장에서 먹고 가기",
  "takeout": "포장하기"
};

let currentOrderType = null;

document.querySelectorAll("[data-order-type]").forEach((button) => {
  button.addEventListener("click", () => {
    currentOrderType = button.dataset.orderType;
    selectedType.textContent = orderTypeLabels[currentOrderType];
    message.textContent = "";
    startScreen.hidden = true;
    nextScreen.hidden = false;
  });
});

backButton.addEventListener("click", () => {
  currentOrderType = null;
  nextScreen.hidden = true;
  startScreen.hidden = false;
});

menuButton.addEventListener("click", () => {
  message.textContent = "메뉴 선택 화면은 다음 개발 단계에서 연결할 예정입니다.";
});
