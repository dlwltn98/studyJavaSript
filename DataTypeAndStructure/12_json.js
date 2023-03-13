/**
 * 자료구조와 자료형 : JSON과 메서드
 * 12-1. 객체를 JSON으로 바꾼 후 다시 객체로 바꾸기
 * https://ko.javascript.info/json
 */
let user = {
    name: "John Smith",
    age: 35
  };
  
  let encoding = JSON.stringify(user);
  console.log(encoding);
  
  let decoding = JSON.parse(encoding);
  console.log(decoding);

/**
 * 자료구조와 자료형 : JSON과 메서드
 * 12-2. 역참조 배제하기
 */
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // 순환 참조
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    /* 코드를 작성할 곳 */
    return (key !== '' && value === meetup) ? undefined : value;
  }));
  
  /* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */