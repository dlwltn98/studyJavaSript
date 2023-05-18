// getItemFromTwoSortedArrays

// 내가 푼 방법
// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//   // TODO: 여기에 코드를 작성합니다.
//   let left = 0, right = 0;
//   let index = 0;
//   let result = 0;

//   while(index < k) {
//     if(arr1[left] < arr2[right]) {
//       result = arr1[left];
//       left++;
//     }else {
//       result = arr2[right];
//       right++;
//     }
//     index++;
//   }
//   return result;
// };

// Advanced
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  let leftIdx = 0,
    rightIdx = 0;

  while (k > 0) {
    let cnt = Math.ceil(k / 2); // 이진탐색
    let leftStep = cnt,
      rightStep = cnt;

    // 카운트가 남았음에도 배열의 끝에 도달하면 k를 나머지 배열쪽으로 넘긴다.
    if (leftIdx === arr1.length) {
      rightIdx += k;
      break;
    }
    if (rightIdx === arr2.length) {
      leftIdx += k;
      break;
    }

    // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, leftStep(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
    if (cnt > arr1.length - leftIdx) {
      leftStep = arr1.length - leftIdx;
    } else if (cnt > arr2.length - rightIdx) {
      rightStep = arr2.length - rightIdx;
    }

    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      leftIdx += leftStep;
      k -= leftStep;
    } else {
      rightIdx += rightStep;
      k -= rightStep;
    }
  }

  lMax = arr1[leftIdx - 1] || -1;
  rMax = arr2[rightIdx - 1] || -1;

  return Math.max(lMax, rMax);
};
