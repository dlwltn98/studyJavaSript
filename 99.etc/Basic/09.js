// ABCheck
function ABCheck(str) {
  // code goes here
  if (str.length === 0) return false;

  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" && str[i + 4] === "b") return true;
    if (str[i] === "b" && str[i + 4] === "a") return true;
  }
  return false;
}
