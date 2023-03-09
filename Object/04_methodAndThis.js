/**
 * 객체:메서드와 this
 * 2-1. 객체 리터럴에서 this 사용하기
 * https://ko.javascript.info/object-methods
 */
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); 

/**
 * 객체:메서드와 this
 * 2-2. 계산기 만들기
 */
let calculator = {
    read() {
      this.num1 = +prompt('값1:', 0);
      this.num2 = +prompt('값2:', 0);
    },
    sum() {
      return this.num1 + this.num2;
    },
    mul() {
      return this.num1 * this.num2;
    }
  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );

/**
 * 객체:메서드와 this
 * 2-3. 체이닝
 */
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  }
  
  ladder.up().up().down().up().down().showStep(); 