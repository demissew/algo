/* 

Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm 
that repeatedly steps through the list, compares adjacent elements and swaps them 
if they are in the wrong order. 
The pass through the list is repeated until the list is sorted. 
The algorithm, which is a comparison sort, is named for the way smaller or larger 
elements "bubble" to the top of the list.

This simple algorithm performs poorly in real world use and is used primarily as 
an educational tool. 
More efficient algorithms such as quicksort, timsort, or merge sort are used by the 
sorting libraries built into popular programming languages such as Python and Java.

Time complexity: O(n2)
Space complexity: O(n)

Ref: https://en.wikipedia.org/wiki/Bubble_sort

*/

//direction 1=asc, -1=desc
function bubbleSort(arr, direction = 1) {
  let len = arr.length;
  if (len <= 1) return arr;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (direction === 1) {
        if (arr[i] < arr[j]) {
          arr = swap(arr, i, j);
        }
      } else if (direction === -1) {
        if (arr[i] > arr[j]) {
          arr = swap(arr, i, j);
        }
      }
    }
  }
  return arr;
}
let swapCount = 0;
function swap(arr, i, j) {
  console.log(swapCount++);
  let x = arr[i];
  arr[i] = arr[j];
  arr[j] = x;
  return arr;
}

let arr = [2, 3, 54, 65, 76, 87, 23, 34, 56, 87, 8909];
console.log(bubbleSort(arr, 1));

// arr = [];
// console.log(bubbleSort(arr, -1));

// arr = [1];
// console.log(bubbleSort(arr, -1));
