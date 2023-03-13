/**
 * 자료구조와 자료형 : Date 객체와 날짜
 * 11-1. 날짜 생성하기 
 * https://ko.javascript.info/date
 */
let time = new Date(2012, 1, 20, 3, 12);
console.log(time);

/**
 * 자료구조와 자료형 : Date 객체와 날짜
 * 11-2. 요일 보여주기
 */
function getWeekDay(date) {
    let weeks = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return weeks[date.getDay()];
  }
  
  let date = new Date(2012, 0, 3);  // 2012년 1월 3일
  alert( getWeekDay(date) );        // "TU"가 출력되어야 합니다.

/**
 * 자료구조와 자료형 : Date 객체와 날짜
 * 11-3. 유럽 기준 달력 
 */
function getLocalDay(date) {
    let day = date.getDay();
  
    if (day == 0) { // 일요일(숫자 0)은 유럽에선 7입니다.
      day = 7;
    }
  
    return day;
  }
  
  let date = new Date(2023, 2, 13);  // 2023년 03월 13일
  alert( getLocalDay(date) );       // 월요일이므로, 1이 출력되어야 함

/**
 * 자료구조와 자료형 : Date 객체와 날짜
 * 11-4. n일 전 '일' 출력하기 
 */
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date = new Date(2015, 0, 2); // 2015년 1월 2일
  
  alert( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
  alert( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
  alert( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)

/**
 * 자료구조와 자료형 : Date 객체와 날짜
 * 11-5. 달의 마지막 일 
 */
function getLastDayOfMonth(year, month) {
    // 0을 넘기면 '첫 번째 일의 1일 전’을 의미
    let date = new Date(year, month+1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) ); // 31
  alert( getLastDayOfMonth(2012, 1) ); // 29
  alert( getLastDayOfMonth(2013, 1) ); // 28

/**
 * 자료구조와 자료형 : Date 객체와 날짜
 * 11-6. 몇 초나 지났을까요?
 */
function getSecondsToday() {
    let now = new Date();  // 현재 시간
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today;
    return Math.round(diff/1000);  // 초로 바꿈 
  }
  
  console.log(getSecondsToday());

/**
 * 자료구조와 자료형 : Date 객체와 날짜
 * 11-7. 몇 초나 남았을까요?
 */
function getSecondsToTomorrow() {
    let now = new Date();
    let dt = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = dt - now;
    return Math.round(diff/1000);  // 초로 바꿈 
  }
  
  console.log(getSecondsToTomorrow());