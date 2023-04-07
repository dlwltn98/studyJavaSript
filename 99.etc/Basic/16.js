// isIsogram
function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  str = str.toLowerCase();
  for (let i of str) {
    if (str.indexOf(i) !== str.lastIndexOf(i)) {
      return false;
    }
  }
  return true;
}
