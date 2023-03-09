/**
 * 자료구조와 자료형 : 숫자형
 * 2-1. 수를 입력받아 덧셈하기
 *  https://ko.javascript.info/number
 */
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

console.log(a+b);

/**
 * 자료구조와 자료형 : 숫자형
 * 2-2. A ramdom integer from min to max
 */
function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );
alert( randomInteger(1, 5) ); 
alert( randomInteger(1, 5) ); 
alert( randomInteger(1, 5) ); 