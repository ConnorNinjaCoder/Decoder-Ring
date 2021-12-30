const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius-Connor Foster's Tests", () => {
  it("Should translate letters i and j to 42.", () => {
    const input = "ij";
    const expected = "4242";
    const actual = polybius(input);        
    expect(actual).to.equal(expected);
  });
   
   it("Should translate 42 to (i/j).", () => {
     const input = "4231433333432412433444512442";
     const actual = polybius(input, false);
     const expected = "(i/j)";
     expect(actual).includes(expected);
   });
  
   it("Should maintain spaces in the message before and after encoding" ,() => {
     const input = "a person cool";
     const actual = polybius(input);
     const expected = "11 535124344333 31434313";
     expect(actual).to.equal(expected);
   });
  
   it("Should maintain spaces in the message before and after decoding", () => {
     const input = "11 535124344333 31434313";
     const actual = polybius(input, false);
     const expected = "a person cool";
     expect(actual).to.equal(expected);
   })
  
   it("Should ignore capital letters.", () => {
     const input = "A message";
     const actual = polybius(input);
     const expected = "11 23513434112251";
     expect(actual).to.equal(expected);
   });
  
   
})
