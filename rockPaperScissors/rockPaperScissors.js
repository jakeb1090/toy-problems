/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function(rounds) {
  var options = ['R', 'P', 'S'];
  // debugger;
  var result = [];
  var table = Array(rounds).fill('R');

  for (var i = 0; i < rounds.length; i++) {
    for (var k of options) {
      table.unshift(k);
      table.pop();
      console.log(table.join())
    }
  }

  return result;
};

console.log(rockPaperScissors(3))



//Time Complexity = LINEAR;