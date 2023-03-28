// 5. 사람들의 정보를 담은 배열을 입력받아 조건에 맞게 각 개인의 전체 이름을 요소로 갖는 배열을 리턴해야 합니다.

function test5(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let objArr = [];
  for (let i of arr) {
    objArr.push(Object.fromEntries(i));
  }

  let objArrSort = objArr.sort(function (a, b) {
    return a.age - b.age;
  });

  let result = [];
  for (let i of objArrSort) {
    let name = "";
    if (i.firstName) {
      name += i.firstName;
    }

    if (i.lastName) {
      if (name.length === 0) {
        name += i.lastName;
      } else {
        name += ` ${i.lastName}`;
      }
    }
    result.push(name);
  }
  return result;
}
