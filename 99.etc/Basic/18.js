// numberSearch
function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length === 0) return 0;

  let num = str.replace(/[^0-9]/g, "");
  let realStr = str.replace(/[^a-z|A-Z]/g, "");

  let sum = 0;
  for (let i of num) {
    sum += Number(i);
  }

  return Math.round(sum / realStr.length);
}
