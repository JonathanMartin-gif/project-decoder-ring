const substitution = require('../src/caesar');
let chai = require('chai'), expect = chai.expect, should = chai.should(), assert = chai.assert;


describe('substitution', () => {
  it(`It returns false if the given alphabet isn't exactly 26 characters long`, ()=>{

  })
  it('It correctly translates the given phrase, based on the alphabet given to the function', () =>{

  })
  it('It returns false if there are any duplicate characters in the given alphabet', ()=>{

  })
  it('ignores capital letters', () => {
  const expected = 'thinkful';
  const actual = substitution('ThInKfUlL', 3, encode = false);
  expect(actual).to.include(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after encoding', () => {
  const expected = 'cheud pdjdclqh';
  const actual = substitution('Zebra Magazine', 3, encode = true);
  expect(actual).to.equal(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after decoding', () => {
   const expected = 'zebra magazine';
   const actual = substitution('cheud pdjdclqh', 3, encode = false);
   expect(actual).to.equal(expected);
  })
})
