const polybius = require('../src/caesar');
let chai = require('chai'), expect = chai.expect, should = chai.should(), assert = chai.assert;


describe('polybius', () => {
  it('When encoding, it translates the letters i and j to 42',() =>{
  
  })
  it('When decoding, it translates 42 to (i/j)', () =>{

  })
  it('ignores capital letters', () => {
  const expected = 'thinkful';
  const actual = polybius('ThInKfUlL', 3, encode = false);
  expect(actual).to.include(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after encoding', () => {
  const expected = 'cheud pdjdclqh';
  const actual = polybius('Zebra Magazine', 3, encode = true);
  expect(actual).to.equal(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after decoding', () => {
   const expected = 'zebra magazine';
   const actual = polybius('cheud pdjdclqh', 3, encode = false);
   expect(actual).to.equal(expected);
  })
})
