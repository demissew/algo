function selectionSort(arr, direction = 1) {
  let len = arr.length;
  if (len <= 1) return arr;
  for (let i = 0; i < len; i++) {
    let selectedIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (direction === 1) {
        if (arr[j] < arr[selectedIndex]) {
          selectedIndex = j;
        }
      } else if (direction === -1) {
        if (arr[j] > arr[selectedIndex]) {
          selectedIndex = j;
        }
      }
    }
    let temp = arr[i];
    arr[i] = arr[selectedIndex];
    arr[selectedIndex] = temp;
  }
  return arr;
}
let arr = [23, 45, 76, 43, 23, 45, 67, 87, 98, 56, 43, 332, 3223, 732, 532];
console.log(selectionSort(arr, -1));
