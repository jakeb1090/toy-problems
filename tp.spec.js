const add = require("./exampleModule").add;
const multiply = require("./exampleModule").multiply;
const Stack = require("./constantTimeStackMin/constantTimeStackMin").Stack;

/*
A "describe" block can be used to group together multiple tests
which check the same nodule or function.
 */
describe.only("Example tests", function(){

  // Individual tests can be run using the "it" or "test" methods, they are aliased and are equivalent
  it("Should add small numbers", function(){
    /* This test suite is written in Jest. There are many more methods other than "toBe"
    Go to: https://jestjs.io/docs/en/expect
    to find more options if "toBe" doesn't fit your use case.
    */
    expect(add(1,1)).toBe(2);
  });

  // In addition to expected, "happy path", behaviour as above, you should also test your edge cases
  it("Should return Infinity for numbers of type Number which are very large", function(){
    expect(add(1.6E310, 1)).toBe(Infinity);
  });
});

/*
You start here. 1 describe block per toy problem.
Notice the method "only" above. Because it is there, the describe block below won't run.
You'll need to remove the "only" from the block above. You can use that method to only run tests
on the toy problem you're currently working on. https://jestjs.io/docs/en/api#describeonlyname-fn
*/
describe("Replace this with the name of toy problem", function(){
  test("Replace this with the desired behaviour", function(){

    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    expect(add(1,0)).toBe(0);
    expect(multiply(1,1)).toBe(1);
  });
});

describe('hasTableResizing', () => {
  it('should return an object', () => {
    expect(new makeHashTable()).to.be(typeof Object)
  })
})


describe("constantTimeStackMin", () => {
  var stack = new Stack();
  stack.push(4);
  stack.push(3);
  stack.pop();

  it('should return a stack', () => {
    expect(new Stack()).toBe(typeof Array);
  });
  it('stack size should reflect length of stack', () => {
    expect(stack.size()).should.be(2);
  });
});

describe("bubbleSort", function() {
  it('should return a sorted array', function() {
    expect(bubbleSort([1, 2, 3])).to.be([1, 2, 3])
  });

  it('should return an empty array if passed as arg', function() {
    expect(bubbleSort([])).to.equal([]);
  })

})
