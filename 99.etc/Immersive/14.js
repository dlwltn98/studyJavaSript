// rotatedArraySearch
const rotatedArraySearch = function (rotated, target) {
    // TODO : 여기에 코드를 작성합니다.
    let left = 0;
    let right = rotated.length-1;
  
    while (left <= right) {
      let mid = parseInt((left+right)/2);
  
      if (rotated[mid] === target) {
        return mid;
      }
  
      if (rotated[left] < rotated[mid]) {
        // 왼쪽 절반 정렬
        if (target < rotated[mid] && rotated[left] <= target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        // 오른쪽 절반 정렬
        if (target <= rotated[right] && rotated[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  };
  