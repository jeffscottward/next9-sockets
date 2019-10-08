const should = require("chai").should(); //actually call the function
const foo = "bar";
const beverages = { tea: ["chai", "matcha", "oolong"] };

// 'https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71

beforeEach("Setting up the userList", function() {
  console.log("beforeEach");
});

describe("Testing example", () => {

  describe("string testing", () => {

    it("should be a string of bar", () => {
      // Pass in (done) for async tests
      foo.should.be.a("string");
      foo.should.equal("bar");
      foo.should.have.lengthOf(3);
    });

    it.skip("should be a string of 'bazz'", () => {
      foo.should.be.a("string");
      foo.should.equal("bazz");
      foo.should.have.lengthOf(4);
    });
  });
  
  describe.skip("object testing", () => {
    
    it("should be an object with a key", () => {
      beverages.should.be.a("object")
    });
  });
});

afterEach("Setting up the userList", function() {
  console.log("afterEach");
});