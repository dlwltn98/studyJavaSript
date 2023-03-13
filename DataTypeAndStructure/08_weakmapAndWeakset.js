/**
 * 자료구조와 자료형 : 위크맵과 위크셋
 * 8-1. '읽음' 상태인 메시지 저장하기 
 * https://ko.javascript.info/weakmap-weakset
 */
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMsgs = new WeakSet();
  
  // 메시지 읽음 상태로 변경
  readMsgs.add(messages[0]);
  readMsgs.add(messages[1]);
  
  
  console.log("'messages[0]'은 읽음 상태인가요?" + readMsgs.has(messages[0]));
  

/**
 * 자료구조와 자료형 : 위크맵과 위크셋
 * 8-2. 읽은 날짜 저장하기 
 */
let messages2 = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMsg = new WeakMap();
  readMsg.set(messages2[0], new Date(2023, 03, 13));
  