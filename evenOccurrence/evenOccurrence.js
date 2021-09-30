/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  var result

  var obj = arr.reduce((acc, item) => {
    if (acc[item] === undefined) {
      acc[item] = 1;
    } else {
      acc[item] ++;
    }
    return acc;
  }, {});
  for (var key in obj) {
    if (obj[key] % 2 === 0) {
      return obj[key];
    }
  }
};


var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven);