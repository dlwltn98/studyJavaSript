// removeExtremes
function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let shortStr = arr[0];
  let longStr = "";
  arr.forEach((i) => {
    if (i.length <= shortStr.length) {
      shortStr = i;
    } else if (i.length >= longStr.length) {
      longStr = i;
    }
  });

  arr.splice(arr.indexOf(shortStr), 1);
  arr.splice(arr.indexOf(longStr), 1);
  return arr;
}
