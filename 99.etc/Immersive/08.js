// largestProductOfThree
const largestProductOfThree = function (arr) {
    let sortArr = arr.sort((a,b)=> a-b);

    const calc1 = sortArr[arr.length-1] * sortArr[0] * sortArr[1];
    const calc2 = sortArr[arr.length-1] * sortArr[arr.length-2] * sortArr[arr.length-3];
  
     return Math.max(calc1, calc2);
}