/**
 * 자료구조와 자료형 : 구조 분해 할당
 * 10-1. 구조 분해 할당
 * https://ko.javascript.info/destructuring-assignment
 */
let user = { name: "John", years: 30 };

let {name, years:age, isAdmin=false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

/**
 * 자료구조와 자료형 : 구조 분해 할당
 * 10-2. 최대 급여 계산하기
 */
function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for(let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries))
