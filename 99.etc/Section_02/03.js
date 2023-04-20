// 저번에 이어, 또다시 N * N의 크기를 가진 보드판 위에서 게임을 하려고 합니다.
function test3(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  let pos0 = 0;
  let pos1 = 0;
  let result = 0;

  for (let i of operation) {
    console.log(i);
    if (i === "R" && pos1 < board[0].length - 1) {
      pos1++;
      result += board[pos0][pos1];
      board[pos0][pos1] = 0;
    }

    if (i === "L" && pos1 > 0) {
      pos1--;
      result += board[pos0][pos1];
      board[pos0][pos1] = 0;
    }

    if (i === "U" && pos0 > 0) {
      pos0--;
      result += board[pos0][pos1];
      board[pos0][pos1] = 0;
    }

    if (i === "D" && pos0 < board.length - 1) {
      pos0++;
      result += board[pos0][pos1];
      board[pos0][pos1] = 0;
    }
  }

  return result;
}
