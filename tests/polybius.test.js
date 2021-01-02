const polybius = require('../src/caesar');
let chai = require('chai'), expect = chai.expect, should = chai.should(), assert = chai.assert;


describe('polybius', () => {
  it('When encoding, it translates the letter i to 42',() =>{
  const expected = 42;
  const actual = polybius('i', encode = true);
  expect(actual).to.equal(expected);
  })
  it('When encoding, it translates the letter j to 42', () => {
  const expected = 42;
  const actual = polybius('j', encode = true);
  expect(actual).to.equal(expected);
  })
  it('When decoding, it translates 42 to i', () =>{
  const expected = 'i';
  const actual = polybius(42 , encode = true);
  expect(actual).to.equal(expected)
  })
  it('When decoding, it translates 42 to j', ()=>{
  const expected = 'j';
  const actual = polybius(42 , encode = true);
  expect(actual).to.equal(expected)
  })
  it('ignores capital letters', () => {
  const expected = 'thinkful';
  const actual = polybius('ThInKfUlL', encode = true);
  expect(actual).to.equal(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after encoding', () => {
  const expected = 'cheud pdjdclqh';
  const actual = polybius('Zebra Magazine', encode = true);
  expect(actual).to.equal(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after decoding', () => {
   const expected = 'zebra magazine';
   const actual = polybius('cheud pdjdclqh', encode = true);
   expect(actual).to.equal(expected);
  })
})
