// letterCapitalize
function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])

    if (typeof arr[i] !== undefined && arr[i] !== "") {
      // console.log("*** ",typeof arr[i])
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(" ");
}
