// balancedBrackets
function chkB (char, char2) {
    if(char === '{') {
      return char2 === '}';
    }else if(char === '(') {
      return char2 === ')';
    }else if(char === '[') {
      return char2 === ']';
    }
  }
  
  const balancedBrackets = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    const lBrackets = ['(', '[', '{'];
    const rBrackets = [')', ']', '}'];
  
    const stack = [];
    for(char of str) {
      if(lBrackets.includes(char)) {
        stack.push(char);
      }
      if(stack.length > 0) {
        if(rBrackets.includes(char)) {
          let stackChar = stack.pop();
          // console.log(stack)
          // console.log(stackChar, "   ", char)
          if(!chkB(stackChar, char)) return false;
        } 
      }else {
        return false;
      }
    }
    return stack.length === 0;
  };
  