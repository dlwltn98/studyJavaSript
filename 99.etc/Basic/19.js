// decryptCaesarCipher
function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  let resultStr = "";
  for (let i of str) {
    let char = "";
    if (i === " ") {
      char = i;
    } else {
      char = i.charCodeAt() - secret;
      if (char < 97) {
        char = 122 - (96 - char);
      }
      console.log(char);
      char = String.fromCharCode(char);
    }
    resultStr += char;
  }

  return resultStr;
}
