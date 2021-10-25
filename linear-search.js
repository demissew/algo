function linearSearch(arr, s) {
  let l = arr.length;
  if (l === 0) return -1;
  for (i = 0; i < l; i++) {
    if (arr[i] === s) {
      return i;
    }
  }
  return -1;
}

const result = linearSearch([10, 125, 33, 44, 676, 32], 10.0);
console.log(result);
