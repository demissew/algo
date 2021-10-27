/*

Selection sort is an in-place comparison sorting algorithm. 
It has an O(n2) time complexity, which makes it inefficient on large lists, and 
generally performs worse than the similar insertion sort. 

Selection sort is noted for its simplicity and has performance advantages over 
more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

The algorithm divides the input list into two parts: a sorted sublist of items 
which is built up from left to right at the front (left) of the list and a sublist of the 
remaining unsorted items that occupy the rest of the list. 
Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. 
The algorithm proceeds by finding the smallest (or largest, depending on sorting order) 
element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element 
(putting it in sorted order), and moving the sublist boundaries one element to the right.

The time efficiency of selection sort is quadratic, so there are a number of sorting techniques 
which have better time complexity than selection sort. One thing which distinguishes selection sort 
from other sorting algorithms is that it makes the minimum possible number of swaps, n − 1 in the worst case.

Time complexity: O(n2)
Space complexity: O(1)

Ref: https://en.wikipedia.org/wiki/Selection_sort

*/

function selectionSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  for (let i = 0; i < len; i++) {
    let currentMinIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[currentMinIndex] > arr[j]) {
        currentMinIndex = j;
      }
    }
    arr = swap(arr, i, currentMinIndex);
  }
  return arr;
}

function swap(arr, i, j) {
  let x = arr[i];
  arr[i] = arr[j];
  arr[j] = x;
  return arr;
}

let arr = [231, 45, 76, 43, 23, 45, 67, 87, 98, 56, 43, 332, 3223, 732, 532];
console.log(selectionSort(arr));

arr = [];
console.log(selectionSort(arr));

arr = [1];
console.log(selectionSort(arr));
