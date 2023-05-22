// mergeSort

const merge = function (left, right) {
    let merged = [];
    let lIdx = 0, rIdx = 0;
    const size = left.length + right.length;
  
    for(let i=0; i<size; i++) {
      if(lIdx >= left.length) {
        merged.push(right[rIdx]);
        rIdx++;
      }else if(rIdx >= right.length || left[lIdx] <= right[rIdx]) {
        merged.push(left[lIdx]);
        lIdx++;
      }else {
        merged.push(right[rIdx]);
        rIdx++;
      }
    }
    return merged;
  }
  
  const mergeSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length < 2) return arr;
    const middle = parseInt(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    const merged = merge(left, right);
    return merged;
  };