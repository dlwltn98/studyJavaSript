/**
 * 자료구조와 자료형 : 배열
 * 4-2. 배열과 관련된 연산
 *  https://ko.javascript.info/array
 */
let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

let posNum = Math.trunc(styles.length/2);
styles[posNum] = "Classics";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);

/**
 * 자료구조와 자료형 : 배열
 * 4-4. 입력한 숫자의 합 구하기 
 */
function sumInput() {
    let arr = [];
  
    while(true) {
        let value = prompt("숫자를 입력해 주세요.", 0);
  
      // 입력받는 것을 정지해야 하는 경우
      if (value === "" || value === null || !isFinite(value))           break;
  
      arr.push(+value);
    }
  
    let sum = 0;
    for (let i of arr) {
      sum += i;
    }
    
    return sum;
  }
  
  console.log(sumInput())

/**
 * 자료구조와 자료형 : 배열
 * 4-5. 최대합 부분 배열
 */
function getMaxSubSum(arr) {
    let max = 0;
    let midMax = 0;
  
    for(let i of arr) {
      midMax += i;
      max = Math.max(max, midMax);
      
      if (midMax < 0) {
        midMax = 0;
      }
    }
    return max;
  }
  
  
  console.log( getMaxSubSum([-1, 2, 3, -9]) == 5 )
  console.log( getMaxSubSum([2, -1, 2, 3, -9]) == 6 )
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) == 11 )
  console.log( getMaxSubSum([-2, -1, 1, 2]) == 3 )
  console.log( getMaxSubSum([100, -9, 2, -3, 5]) == 100 )
  console.log( getMaxSubSum([1, 2, 3]) == 6 )
  console.log( getMaxSubSum([-1, -2, -3]) == 0 )