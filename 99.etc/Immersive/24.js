// radixSort

function getMax(arr) {
    return arr.reduce((max, item) => {
      if (item > max) return item;
      return max;
    }, 0);
  }
  
  function countingSort(arr, radix) {
    const output = Array(arr.length).fill(0);
    const cnt = Array(10).fill(0);
  
    arr.forEach((item) => {
      const idx = Math.floor(item/radix) % 10;
      cnt[idx]++;
    });
  
    cnt.reduce((totalNum, num, idx) => {
      cnt[idx] = totalNum + num;
      return totalNum + num;
    })
  
    let i = arr.length - 1;
    while (i >= 0) {
      const idx = Math.floor(arr[i] / radix) % 10;
      output[cnt[idx] - 1] = arr[i];
      cnt[idx] -= 1;
      i--;
    }
  
    return output;
  }
  
  function radixSort(arr) {
    // todo: 여기에 코드를 작성합니다.
    let left = [];
    let right = [];
    arr.forEach((item) => {
      if (item >= 0) right.push(item);
      else left.push(item * -1);
    });
  
    let max = getMax(left);
    let radix = 1;
    while (parseInt(max / radix) > 0) {
      left = countingSort(left, radix);
      radix *= 10;
    }
  
    max = getMax(right);
    radix = 1;
    while (parseInt(max / radix) > 0) {
      right = countingSort(right, radix);
      radix *= 10;
    }
  
    return left
      .reverse()
      .map((item) => item * -1)
      .concat(right);
  }