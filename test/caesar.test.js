const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar-Connor Foster's Tests", () => {
  it("Should return false if shift value is 0, greater than 25, less than -25 or not present", () => {
    const input = "Zebra Magazine";
    const shifts = [0, 26, -26];
    const actual = caesar(input, shifts[0], true);
    const expected = false;
    expect(actual).to.equal(expected);
    
    const actual1 = caesar(input, shifts[1], true);
    expect(actual1).to.equal(expected);
    
    const actual2 = caesar(input, shifts[2], true);
    expect(actual2).to.equal(expected);
    
    const actual3 = caesar(input);
    expect(actual3).to.be.false;
  });
  
  it("Should ignore capital letters", () => {
    const input = "A Message";
    const shift = 5;
    const expected = "f rjxxflj"
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  
  it("Should shift to the right", () => {
    const input = "a message";
    const shift = 5;
    const expected = "f rjxxflj";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  
  it("Should allow for negative shifts (shifts to the left)", () => {
    const input = "Zebra Magazine";
    const shift = -3;
    const expected = "wbyox jxdxwfkb";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  
  it("Should allow for negative shifts wrapping from beginning to end of alphabet", () => {
    const input = "a message";
    const shift = -3;
    const expected = "x jbppxdb";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  
  it("Should allow for shifts to the right wrapping around from the end to beginning of alphabet", () => {
    const input = "zebra magazine";
    const shift = 3;
    const expected = "cheud pdjdclqh";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  
  it("Should maintain spaces and other non-alphabetic characters when encoding", () => {
    const input = "zebra     magazine!!$";
    const shift = 6;
    const expected = "fkhxg     sgmgfotk!!$";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  
  it("Should maintain spaces and other non-alphabetic characters when decoding a negative shift", () => {
    const input = "zebra     magazine!&^!@";
    const shift = -7;
    const expected = "gliyh     thnhgpul!&^!@";
    const actual = caesar(input, shift, false);  
    expect(actual).to.equal(expected);
  });
  
  it("Should maintain spaces and other non-alphabetic characters when decoding a positive shift", () => {
    const input = "zebra     magazine!&^!@";
    const shift = 7;
    const expected = "sxukt     ftztsbgx!&^!@";
    const actual = caesar(input, shift, false);  
    expect(actual).to.equal(expected);
  });
  
});
