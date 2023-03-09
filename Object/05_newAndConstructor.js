/**
 * 객체:new 연산자와 생성자 함수
 * 3-1. 함수 두개로 동일한 객체 만들기
 * https://ko.javascript.info/constructor-new
 */
let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

console.log(new A() == new B());

/**
 * 객체:new 연산자와 생성자 함수
 * 3-2. 계산기 만들기 
 */
function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

/**
 * 객체:new 연산자와 생성자 함수
 * 3-3. 누산기 만들기 
 */
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    return this.value += +prompt('num?', this.value);
  }
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

console.log(accumulator.value); 