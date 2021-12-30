const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution-Connor Foster's Tests", () => {
  it("Should return false if the given alphabet isn't 26 characters long.", () => {
    const alphabet = ['a', 'y', 'h', 'b', 'c', 'd'];
    const input = "message";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });
  
  it("Should correctly encode the given phrase, based on the alphabet given to the function.", () => {
    const alphabet = ['x', 'o', 'y', 'q', 'm', 'c', 'g', 'r', 'u', 'k', 's', 'w', 'a', 'f', 'l', 'n', 't', 'h', 'd', 'j', 'p', 'z', 'i', 'b', 'e', 'v'];
    const input = "connor";
    const actual = substitution(input, alphabet);
    const expected = "ylfflh";
    expect(actual).to.equal(expected);
  });
  
  it("Should correctly decode the given phrase, based on the alphabet given to the function.", () => {
    const input = "ylfflh";
    const alphabet = ['x', 'o', 'y', 'q', 'm', 'c', 'g', 'r', 'u', 'k', 's', 'w', 'a', 'f', 'l', 'n', 't', 'h', 'd', 'j', 'p', 'z', 'i', 'b', 'e', 'v'];
    const actual = substitution(input, alphabet, false);
    const expected = "connor";
    expect(actual).to.equal(expected);
  });
  
  it("Should return false if there are any duplicate characters in the given alphabet.", () => {
    const input = "connor";
    const alphabet = ['x', 'o', 'y', 'q', 'x', 'c', 'g', 'r', 'u', 'x', 's', 'w', 'a', 'f', 'l', 'n', 't', 'h', 'd', 'j', 'p', 's', 'i', 'b', 'e', 'v'];
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });
  
  it("Should maintain spaces before and after encoding.", () => {
    const input = "c o n n o r";
    const alphabet = ['x', 'o', 'y', 'q', 'm', 'c', 'g', 'r', 'u', 'k', 's', 'w', 'a', 'f', 'l', 'n', 't', 'h', 'd', 'j', 'p', 'z', 'i', 'b', 'e', 'v'];
    const actual = substitution(input, alphabet);
    const expected = "y l f f l h";
    expect(actual).to.equal(expected);
  });
  
  it("Should maintain spaces before and after decoding.", () => {
    const input = "y l f f l h";
    const alphabet = ['x', 'o', 'y', 'q', 'm', 'c', 'g', 'r', 'u', 'k', 's', 'w', 'a', 'f', 'l', 'n', 't', 'h', 'd', 'j', 'p', 'z', 'i', 'b', 'e', 'v'];
    const actual = substitution(input, alphabet, false);
    const expected = "c o n n o r";
    expect(actual).to.equal(expected);
  });
  
  it("Should ignore capital letters", () => {
    const input = "CoNNor";
    const input1 = "ylffLH";
    const alphabet = ['x', 'o', 'y', 'q', 'm', 'c', 'g', 'r', 'u', 'k', 's', 'w', 'a', 'f', 'l', 'n', 't', 'h', 'd', 'j', 'p', 'z', 'i', 'b', 'e', 'v'];
    const actual = substitution(input, alphabet);
    const actual1 = substitution(input1, alphabet, false);
    const expected = "ylfflh";
    const expected1 = "connor";
    expect(actual).to.equal(expected);
    expect(actual1).to.equal(expected1);
  });
    
})
