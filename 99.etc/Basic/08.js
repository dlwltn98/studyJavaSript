// convertDoubleSpaceToSingle

function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length === 0) return "";

  return str.replace(/\s{2,}/gi, " ");
}
