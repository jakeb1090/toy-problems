/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

// select pivot
// iterate through array
  // if value is LESS than pivot
  // if value is GREATER than pivot


var quicksort = function(arr, low=0, high=arr.length - 1) {

  if (low < high) {
    var pivot = pivot(arr, low, high);
    quicksort(arr, low, pivot - 1);
    quicksort(arr, pivot + 1, high);
  }
  return arr;


};



console.log(quicksort([1, 2, 43, 100, 100, 21, 21]));
console.log(quicksort([24.7, 24.3, 23, 9, 3, 3, 100, 25, 100]));