// gossipProtocol
const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.
  const matrix = createMatrix(village);
  //console.log(matrix)
  const MOVES = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, 1], // RIGHT
    [0, -1], // LEFT
  ];

  const MAX_SIZE = village.length * village[0].length;

  const isVaild = (row, col) =>
    row >= 0 && row < village.length && col >= 0 && col < village[0].length;
  const q = Array(MAX_SIZE);
  let front = 0;
  let rear = 0;

  const isEmpty = (q) => front === rear;
  const enQ = (q, pos) => {
    q[rear] = pos;
    rear = (rear + 1) % MAX_SIZE;
  };
  const deQ = (q) => {
    const pos = q[front];
    front = (front + 1) % MAX_SIZE;
    return pos;
  };

  let cnt = 0;
  enQ(q, [row, col]);
  matrix[row][col] = 0;
  while (isEmpty(q) === false) {
    const [row, col] = deQ(q);
    cnt = matrix[row][col];
    console.log(cnt);

    MOVES.forEach((move) => {
      const [rDiff, cDiff] = move;
      const nextR = row + rDiff;
      const nextC = col + cDiff;

      if (isVaild(nextR, nextC) && matrix[nextR][nextC] === "1") {
        enQ(q, [nextR, nextC]);
        matrix[nextR][nextC] = matrix[row][col] + 1;
      }
    });
  }

  return cnt;
};
