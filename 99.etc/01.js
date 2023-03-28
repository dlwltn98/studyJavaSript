// 1. 문자열을 입력받아 문자열에 존재하는 각 단어의 개수 정보를 담은 객체를 리턴해야 합니다.

function test1(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length === 0) return {};

  let strArr = str.split(" ").map((ele) => ele.toLowerCase());
  strArr = strArr.filter((ele) => ele !== "");

  let newArr = [];
  let result = {};
  strArr.forEach((ele) => {
    if (!newArr.includes(ele)) {
      newArr.push(ele);
    }
  });

  newArr.forEach((ele) => {
    cnt = 0;
    for (let i of strArr) {
      if (ele === i) {
        cnt++;
      }
    }
    result[ele] = cnt;
  });
  return result;
}
