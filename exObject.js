/**
 * 객체:객체
 * 1-1. 객체야 안녕 
 * https://ko.javascript.info/object
 */
let user = {
    name: "Jhon",
    surname: "Smith",
};
  
user.name = "Pete";
delete user.name;

/**
 * 객체:객체
 * 1-2. 객체가 비어있는지 확인하기
 */
let schedule = {};
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    if (Object.keys(obj).length <= 0) {
      return true;
    } else {
      return false;
    }
}

/**
 * 객체:객체
 * 1-4. 프로퍼티 합계 구하기
 */
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
  let sum = 0;
  for(let key in salaries) {
    sum += salaries[key];
  }
  
  console.log(sum)

/**
 * 객체:객체
 * 1-5. 프로퍼티 값 두 배로 부풀리기
 */
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for(let key in obj) {
      if(typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  
  multiplyNumeric(menu);
  console.log(menu)

/**
 * 객체:메서드와 this
 * 2-1. 객체 리터럴에서 this 사용하기
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