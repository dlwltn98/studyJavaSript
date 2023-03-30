// 4. firstCharacter

function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length === 0) return "";

  let strArr = str.split(" ");

  let result = "";
  strArr.forEach((item) => {
    result += item[0];
  });
  return result;
}
