/**
 * 자료구조와 자료형 : Object.keys, values, entries
 * 9-1. 프로퍼티 값 더하기
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
 * 9-2. 프로퍼티 개수 세기
 */
function count(obj) {
    return Object.keys(obj).length;
  }
  
  let user = {
    name: 'John',
    age: 30
  };
  
  console.log( count(user) ); // 2