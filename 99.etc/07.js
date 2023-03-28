// 7. 객체를 요소로 갖는 배열과 id를 입력받아, 해당 id값을 가지고 있는 객체를 리턴해야 합니다.

function test7(arr, id) {
  // TODO: 여기에 코드를 작성합니다.
  let newArr = [];
  for (let i of arr) {
    if (i.id === id) {
      return i;
    } else if (i.children) {
      newArr = newArr.concat(i.children);
    }
  }
  if (newArr.length > 0) {
    return test7(newArr, id);
  }
  return null;
}
