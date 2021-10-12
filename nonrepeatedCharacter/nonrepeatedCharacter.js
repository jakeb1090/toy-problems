/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var first = '';
  var obj = {};

  for (var i = 0; i < string.split('').length; i ++ ) {
    currentChar = string.split('')[i];
    if (obj[currentChar] === 2) {
      return currentChar;
    }
    if (obj[currentChar] === undefined) {
      obj[currentChar] = 1;
    } else {
      obj[currentChar] ++
    }
  }
}

console.log(firstNonRepeatedCharacter('hello there'));