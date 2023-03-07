/**
 * 자료구조와 자료형 : 배열과 메서드
 * 1-1. border-left-width를 borderLeftWidth로 변경하기
 * https://ko.javascript.info/array-methods#tasks
 */
function camelize(string) {
    splitStr = string.split("-");
  
    splitStr.forEach((item, index) => {
      if(index > 0) {
        splitStr[index] = item[0].toUpperCase() + item.slice(1);
      }
    })
    return splitStr.join("");
  }
  
  console.log(camelize("background-color"))
  console.log(camelize("list-style-image"))
  console.log(camelize("-webkit-transition"))

/**
 * 자료구조와 자료형 : 배열과 메서드
 * 1-2. 특정 범위에 속하는 요소 찾기
 */
function filterRange(array, a, b) {
    return array.filter(item => item <= b && item >= a );
  }
  
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  
  console.log( filtered ); // 3,1 (조건에 맞는 요소)
  console.log( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)

/**
 * 자료구조와 자료형 : 배열과 메서드
 * 1-3. 특정 범위에 속하는 요소 찾기(배열 변경하기)
 */
function filterRangeInPlace(array, a, b) {
    for(let i=0; i < array.length; i++) {
      if(array[i] < a || array[i] > b) {
        array.splice(i,1)
      }
    }
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함
  
  alert( arr ); // [3, 1]


/**
 * 자료구조와 자료형 : 배열과 메서드
 * 1-4. 내림차순으로 정렬하기
 */
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10

/**
 * 자료구조와 자료형 : 배열과 메서드
 * 1-5. 배열 복사본을 정렬하기
 */
function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
  alert( sorted ); // CSS, HTML, JavaScript
  alert( arr ); // HTML, JavaScript, CSS (no changes)

/**
 * 자료구조와 자료형 : Object.keys, values, entries
 * 2-1. 프로퍼티 값 더하기
 * https://ko.javascript.info/keys-values-entries
 */
function sumSalaries(salaries) {
    let sum = 0;
    for (let i of Object.values(salaries)) {
      sum += i;
    }
    return sum;
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log(sumSalaries(salaries)); // 650

/**
 * 자료구조와 자료형 : Object.keys, values, entries
 * 2-2. 프로퍼티 개수 세기
 */
function count(obj) {
    return Object.keys(obj).length;
  }
  
  let user = {
    name: 'John',
    age: 30
  };
  
  console.log( count(user) ); // 2