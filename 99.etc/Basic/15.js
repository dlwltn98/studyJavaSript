// modulo
function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  if (num2 === 0) return "Error: cannot divide by zero";
  let result = 0;
  while (true) {
    if (num1 > num2) {
      num1 -= num2;
      result = num1;
    } else {
      break;
    }
  }
  return result;
}
