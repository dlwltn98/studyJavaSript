// compressString
function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.
  let cnt = 1;

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      if (cnt >= 3) {
        result += cnt + str[i];
        cnt = 1;
      } else {
        for (let j = 0; j < cnt; j++) {
          result += str[i];
        }
        cnt = 1;
      }
    }
  }
  return result;
}
