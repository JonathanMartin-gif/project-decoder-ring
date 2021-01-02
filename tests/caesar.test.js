const caesar = require('../src/caesar');
let chai = require('chai'), expect = chai.expect, should = chai.should(), assert = chai.assert;

describe('caesar', () => {
  it('returns false if the shift value is equal to 0', () => {
  const actual = caesar('thinkful', 0, encode = false);
  expect(actual).to.be.false;
  })
  it('returns false if the shift value is less than -25', () => {
  const actual = caesar('thinkful', -30, encode = false);
  expect(actual).to.be.false;
  })
  it('returns false if the shift value is greater than 25', () => {
  const actual = caesar('thinkful', 30, encode = false);
  expect(actual).to.be.false;
  })
  it('returns false if the shift not present', () => {
  const actual = caesar('thinkful', encode = false);
  expect(actual).to.be.false;
  })
  it('ignores capital letters', () => {
  const expected = 'thinkful';
  const actual = caesar('ThInKfUlL', 3, encode = false);
  expect(actual).to.equal(expected);
  })
  it('handles shifts that go past the end of the alphabet', () =>{
  const expected = 'c';
  const actual = caesar('z', 3, encode = true);
  expect(actual).to.equal(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after encoding', () => {
  const expected = 'cheud pdjdclqh';
  const actual = caesar('Zebra Magazine', 3, encode = true);
  expect(actual).to.equal(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after decoding', () => {
   const expected = 'zebra magazine';
   const actual = caesar('cheud pdjdclqh', 3, encode = false);
   expect(actual).to.equal(expected);
  })
 });

 //   const expected = false;
 //  const actual = caesar(input, 0, encode = false);
 //  expect(actual).to.equal(expected);
 // })
 //  it("Values cannot be less than -25", () => {
 //  const expected = expect(actual).to.not.be.lessThan(-25);
 //  const actual = caesar(input, shift, encode = false);
 //  expect(actual).to.equal(expected);
 // })
 //  it("Values cannot be greater than 25", () => {
 //  const actual = caesar(input, shift, encode = false);
 //  expect(actual).to.be.false;
 // })
 //  it("No spaces before or after decoding", () => { 
 //  const expected = `secret m3ssages 4re fun!`;
 //  const actual = caesar(input, shift, encode = false);
 //  expect(actual).to.equal(expected);
 // })
 //  it("No spaces before or after non-alphabetic symbols", () => {
 //  const expected = `secret m3ssages 4re fun!`;
 //  const actual = caesar(input, shift, encode = false);
 //  expect(actual).to.equal(expected);
 // })
 //  it("No spaces before or after encoding", () => {
 //  const expected = `secret m3ssages 4re fun!`;
 //  const actual = caesar(input, shift, encode = false);
 //  expect(actual).to.equal(expected);
 //  })
 //  it("'a' or 'A' should be encoded with the same result", () => {
 //  expect(a, A).to.equal(same);
 //  })
 //  it("If a letter is shifted so that it goes 'off' the alphabet, it should wrap around to the front of the alphabet", () => {
  
 //  })

