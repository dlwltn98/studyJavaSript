/**
 * 자료구조와 자료형 : 문자형
 * 3-1. 첫글자를 대문자로 변경하기
 *  https://ko.javascript.info/string
 */
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john") == "John")

/**
 * 자료구조와 자료형 : 문자형
 * 3-2. 스팸 문자열 걸러내기
 */
function checkSpam(str) {
  let lowStr = str.toLowerCase();
  return lowStr.includes('viagra') || lowStr.includes('xxx');
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );

/**
 * 자료구조와 자료형 : 문자형
 * 3-3. 문자열 줄이기
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0,maxlength-1) + "…";
  }else {
    return str;
  }
}

console.log(truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…");
console.log( truncate("Hi everyone!", 20) == "Hi everyone!" );

/**
 * 자료구조와 자료형 : 문자형
 * 3-4. 숫자만 추출하기 
 */
function extractCurrencyValue(str) {
  return parseInt(str.slice(1));
}

console.log( extractCurrencyValue('$120') === 120 ); // true