// insertDash
function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  let resultStr = "";
  let chkOdd = false;
  for (let i of str) {
    if (parseInt(i) % 2 !== 0) {
      if (chkOdd) {
        resultStr += "-";
      }
      chkOdd = true;
    } else {
      chkOdd = false;
    }
    resultStr += i;
  }
  return resultStr;
}
