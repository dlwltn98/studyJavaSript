// robotPath

const robotPath = function (room, src, dst) {
    // TODO: 여기에 코드를 작성합니다.
    const m = room.length;
    const n = room[0].length;
  
    const aux = (candi, step) => {
      const [row, col] = candi;
      if (row < 0 || row >= m || col < 0 || col >= n) {
        return;
      }
  
      if (room[row][col] === 0 || room[row][col] > step) {
        room[row][col] = step;
      } else {
        return;
      }
  
      aux([row+1, col], step+1);
      aux([row-1, col], step+1);
      aux([row, col+1], step+1);
      aux([row, col-1], step+1);
    }
  
    aux(src, 1);
  
    const [r,c] = dst;
    return room[r][c] -1;
  };
  