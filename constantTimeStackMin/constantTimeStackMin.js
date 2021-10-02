/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    this.storage = [];
    this.tempStorage = [];

  // add an item to the top of the stack
    this.push = function(value) {
      this.storage.push(value);

      if (this.tempStorage.length === 0 || value < this.tempStorage[this.tempStorage.length - 1] ) {
        this.tempStorage.pop();
        this.tempStorage.push(value);
        this.storage.push(value);
      }

      this.storage.push(this.tempStorage[this.tempStorage.length - 1]);


    };

  // remove an item from the top of the stack
    this.pop = function() {
      var removedItem = this.storage.pop();
      return removedItems;
    };

  // return the number of items in the stack
    this.size = function() {
      return this.storage.length;
    };

  // return the minimum value in the stack
    this.min = function() {
      // console.log('min', Math.min(this.storage))
      return this.storage[this.storage.length - 1];      // return this.storage;
    };

  };


module.exports = Stack;

// var example = new Stack()


// example.push(4)
// example.push(4)
// example.push(6)
// example.push(3)
// console.log(example.min() === 3)
// example.push(3)
// example.push(2)
// example.push(4)

// example.min() === 2


// console.log('min', example.min())
