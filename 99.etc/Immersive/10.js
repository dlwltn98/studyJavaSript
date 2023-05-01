// binarySearch

const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    let low = 0;
    let high = arr.length-1;
  
    while (low <= high) {
      let mid = Math.floor((low+high)/2);
  
      if(arr[mid] === target) {
        return mid;
      }else if(arr[mid] > target) {
        high = mid-1;
      }else {
        low = mid+1;
      }
    }
    return -1;
  };
  