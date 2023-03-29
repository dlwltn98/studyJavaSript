// 04. 사원들의 정보를 배열로 입력받아 HTML 엘리먼트의 형태로 변형해서 ul#container에 append 합니다.

function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

function test4(arr) {
  // 여기에 코드를 작성합니다
  const ul = document.querySelector("#container");

  arr.map((ele) => {
    const objArr = Object.values(ele);

    const li = document.createElement("li");
    li.className = "undefined";

    const a = document.createElement("a");
    a.className = "name";
    a.textContent = `${objArr[0]} ${objArr[1]}`;
    a.addEventListener("click", function () {
      printRole(ele);
    });
    li.appendChild(a);

    const div = document.createElement("div");
    div.className = "age";
    div.textContent = objArr[2];
    li.appendChild(div);

    ul.appendChild(li);
  });
}
