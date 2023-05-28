// spiralTraversal
 

  // 각 방향 값 
  const right = [0,1];
  const left = [0,-1];
  const down = [1,0];
  const up = [-1, 0];
  const move = [right, down, left, up];

  const m = matrix.length;
  const n = matrix[0].length;
  const isValid = (row, col) => row >= 0 && row < m && col >= 0 && col < n;

  let cnt = 0;
  let row = 0, col = -1;
  let direction = 0;
  let result = '';

  while(cnt < m*n) {
    const mv = move[direction];
    const [rd, cd] = mv;

    row = row + rd;
    col = col + cd;
    while (isValid(row, col) && matrix[row][col] !== false) {
      result = result + matrix[row][col];
      matrix[row][col] = false;
      row = row + rd;
      col = col + cd;
      cnt++;
    }
    row = row - rd;
    col = col - cd;
    direction = (direction + 1) % 4;
  }
  return result;