// binaryHeap
// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    // 두 변수를 바꾸는 방법
  
    // 1) 임시 변수를 활용한 방법
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;
  
    // 2) Destructuring assignment를 활용한 방법
    // arr이 reference type이라 가능
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  
    // 3) XOR 연산을 활용한 방법
    // arr이 reference type이라 가능
    // arr[idx1] ^= arr[idx2];
    // arr[idx2] ^= arr[idx1];
    // arr[idx1] ^= arr[idx2];
  }
  
  function getParentIdx(idx) {
    // TODO: 여기에 코드를 작성합니다.
    if (idx%2 === 1 ){
      return (idx-1)/2
    }
    else {
      return (idx-2)/2
    }
  }
  function sort( idx, arr ) {
    if (idx===0){
      return arr;
    }
    pIdx = getParentIdx(idx);
    if (arr[idx] > arr[pIdx]) {
      swap(idx, pIdx, arr);
      sort(pIdx, arr);
    }
    else {
      return arr;
    }
  }
  function insert(heap, item) {
    if (heap.length>0) {
      heap.push(item);
      sort(heap.length-1, heap );
    }
    else {
      heap.push(item);
    }
      return heap;
  }
  
  // 아래 코드는 수정하지 마세요.
  const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
      return insert(heap, item);
    }, []);
  };
  
  