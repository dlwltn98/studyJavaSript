// isSubsetOf

const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  const newArr = sample.concat(base);
  const setArr = new Set(newArr);

  if (newArr.length - setArr.size === sample.length) return true;
  else return false;
};
