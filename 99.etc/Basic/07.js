// convertListToObject

function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let resultObj = {};
  for (let i of arr) {
    let chkObj = Object.keys(resultObj).includes(i[0]);
    if (i.length > 0 && !chkObj) {
      resultObj[i[0]] = i[1];
    }
  }
  return resultObj;
}
