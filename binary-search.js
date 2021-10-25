function binarySearch(arr, a) {
  let len = arr.length;

  if (len === 0) return -1;

  let start = 0;
  let end = len - 1;

  return recursiveSearch(arr, a, start, end);
}

function recursiveSearch(arr, a, start, end) {
  if (a === arr[start]) return start;
  if (a === arr[end]) return end;

  if (start === end) return -1;

  let mid = parseInt((end + start) / 2, 10);
  if (a === arr[mid]) return mid;

  if (a >= arr[start] && a <= arr[mid]) {
    return recursiveSearch(arr, a, start, mid);
  } else if (a > arr[mid] && a <= arr[end]) {
    return recursiveSearch(arr, a, mid, end);
  }
  return -1;
}

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
console.log(result);
