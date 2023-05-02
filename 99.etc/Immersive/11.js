// powerSet
const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let strArr = str.split("");
    let arr = [];
    for(let i=0; i<strArr.length; i++) {
      let num = strArr[i];
      if(!arr.includes(num)) {
        arr.push(num);
      }
    }
  
    arr = arr.sort();
  
    let result = [""];
    for(let i=0; i<arr.length; i++) {
      let len = result.length;
      for(let j=0; j<len; j++) {
        result.push(result[j] + arr[i]);
      }
    }
    
    return result.sort(); 
  };
  