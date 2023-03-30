// 2. computeWhenDouble

function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  // 이율
  let rate = 1 + interestRate / 100;

  let calcMoney = 1;
  let year = 0;
  while (calcMoney < 2) {
    calcMoney *= rate;
    year++;
  }
  return year;
}
