// power
function power(base, exponent) {
    // todo: 여기에 코드를 작성합니다.
    if(exponent === 0) return 1;
  
    const half = parseInt(exponent/2);
    const temp = power(base, half);
    const result = (temp * temp) % 94906249;
  
    if (exponent % 2 === 1) return (base * result) % 94906249;
    else return result;
  }
  