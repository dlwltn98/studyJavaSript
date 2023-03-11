/**
 * 자료구조와 자료형 : 맵과 셋
 * 7-1. 배열에서 중복 값 제거하기 
 * https://ko.javascript.info/array-methods#tasks
 */
function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) );

/**
 * 자료구조와 자료형 : 맵과 셋
 * 7-2. 애너그램 걸러내기  
 */
function aclean(arr) {
    let map = new Map();
  
    for (let i of arr) {
      let sorted = i
        .toLowerCase()
        .split('')
        .sort()
        .join('');
  
      map.set(sorted, i);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );