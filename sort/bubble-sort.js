//direction 1=asc, -1=desc
function bubbleSort(arr, direction = 1) {
  let len = arr.length;
  if (len <= 0) return arr;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] < arr[j] && direction === 1) {
        arr = swap(arr, i, j);
      } else if (arr[i] > arr[j] && direction === -1) {
        arr = swap(arr, i, j);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let x = arr[i];
  arr[i] = arr[j];
  arr[j] = x;
  return arr;
}

console.log(bubbleSort([2, 3, 54, 65, 76, 87, 23, 34, 56, 87, 8909], -1));
