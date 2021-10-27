/*
Insertion sort is a simple sorting algorithm that builds the final sorted 
array (or list) one item at a time. 
It is much less efficient on large lists than more advanced algorithms such as 
quicksort, heapsort, or merge sort. 

However, insertion sort provides several advantages:

- Simple implementation
- Efficient for (quite) small data sets, much like other quadratic sorting algorithms
- More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms 
  such as selection sort or bubble sort
- Adaptive i.e., efficient for data sets that are already substantially sorted: 
  the time complexity is O(kn) when each element in the input is no more than k 
  places away from its sorted position
- Stable; i.e., does not change the relative order of elements with equal keys
- In-place; i.e., only requires a constant amount O(1) of additional memory space
- Online; i.e., can sort a list as it receives it


Insertion sort iterates, consuming one input element each repetition, and grows a 
sorted output list. At each iteration, insertion sort removes one element from the 
input data, finds the location it belongs within the sorted list, and inserts it there. 
It repeats until no input elements remain.

Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. 
At each array-position, it checks the value there against the largest value in the sorted list 
(which happens to be next to it, in the previous array-position checked). If larger, it leaves 
the element in place and moves to the next. If smaller, it finds the correct position within the 
sorted list, shifts all the larger values up to make a space, and inserts into that correct position.

The resulting array after k iterations has the property where the first k + 1 entries are sorted 
("+1" because the first entry is skipped). 
In each iteration the first remaining entry of the input is removed, and inserted into the result at 
the correct position, thus extending the result:

Time complexity: O(n2)
Space complexity: O(n)

Ref: https://en.wikipedia.org/wiki/Insertion_sort

*/

function insertionSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;
  for (let i = 1; i < len; i++) {
    if (arr[i] < arr[i - 1]) {
      let val = arr[i];
      i_know_we_dont_need_this_label: for (let j = i; j > 0; j--) {
        if (val <= arr[j - 1]) {
          arr[j] = arr[j - 1];
          arr[j - 1] = val;
        }
        if (val >= arr[j - 2]) {
          break i_know_we_dont_need_this_label;
        }
      }
    }
  }
  return arr;
}

let arr = [231, 45, 76, 43, 23, 45, 67, 87, 98, 56, 43, 332, 3223, 732, 532];

console.log(arr);
console.log(insertionSort(arr));
