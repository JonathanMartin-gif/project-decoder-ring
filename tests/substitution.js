const substitution = require('../src/caesar');
let chai = require('chai'), expect = chai.expect, should = chai.should(), assert = chai.assert;


describe('substitution', () => {
  it(`It returns false if the given alphabet isn't exactly 26 characters long`, ()=>{
  const actual = substitution(input, ['a','b'], encode = true);
  expect(actual).to.be.false;
  })
  it('It correctly translates the given phrase, based on the alphabet given to the function', () =>{
  const expected = 'zebra magazine';
  const actual = substitution('cheud pdjdclqh', ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], encode = true);
  expect(actual).to.equal(expected);
  })
  it('It returns false if there are any duplicate characters in the given alphabet', ()=>{
  const actual = substitution('aa', ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], encode = false);
  expect(actual).to.be.false;
  })
  it('ignores capital letters', () => {
  const expected = 'thinkful';
  const actual = substitution('ThInKfUlL', ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], encode = true);
  expect(actual).to.include(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after encoding', () => {
  const expected = 'cheud pdjdclqh';
  const actual = substitution('Zebra Magazine', ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], encode = true);
  expect(actual).to.equal(expected);
  })
  it('maintains spaces and other nonalphabetic symbols in the message, before and after decoding', () => {
   const expected = 'zebra magazine';
   const actual = substitution('cheud pdjdclqh', ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], encode = true);
   expect(actual).to.equal(expected);
  })
})
