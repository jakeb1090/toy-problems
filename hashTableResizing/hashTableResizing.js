/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


class MakeHashTable {
  constructor() {
    this.result = {};
    this.storage = [];
    this.storageLimit = 4;
    this.size = 0;
  }

  insert(key, value) {
    // TODO: implement `insert`
    //if bucket exists
      // if key exists
        // replace value
      // if no key
        // push tuple into bucket

    var hashIndex = getIndexBelowMaxForKey(key, this.storageLimit)
    var bucket = [];


    if (typeof this.storage[hashIndex] !== typeof bucket) {
      for (var tuple in this.storage[hashIndex]) {
        if (tuple[0] === key) {
          tuple[1] = value;
        } else {
        var bucket = this.storage[hashIndex];
        bucket.push([key, value]);
        }
      }
    }

    if (!Array.isArray(this.result[hashIndex])) {
      this.storage[hashIndex] = bucket;
      bucket.push([key, value]);
    }

    this.size ++;
    this.resize();
  };

  retrieve(key) {
    // TODO: implement `retrieve`
    var hashIndex = getIndexBelowMaxForKey(key, this.storageLimit);
    var bucket = this.storage[hashIndex]
    for (var tuple in bucket) {
      if (tuple[0] === key) {
        return tuple
      }
    }
  };

  remove(key) {
    // TODO: implement `remove`
    var tuple = this.retrieve(key)
    var temp = tuple
    tuple = [];

    this.size --;
    this.resize()
    return temp;
  };

  resize() {
    var ratio = this.size / this.storage.length;
    if (ratio.toFixed(2) > .75) {
      this.size = this.size * 2;
    }
    if (ratio.toFixed(2) < .25) {
      this.size = this.size / 2;
    }
  }

};


// var table = new MakeHashTable();

// table.insert('person', 'jake');
// table.insert('person', 'john');
// table.insert('person', 'joe');
// table.insert('person', 'will');
// table.insert('person', 'dude');
// table.remove('person')


// console.log(table)
