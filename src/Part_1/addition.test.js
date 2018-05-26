
// assign it to a variable so you can call it by that name when being tested
const addition = require('./addition')
// import addition from './addition'

// test that the function exists
// the first line is just for you, the programmer to know what's being tested
test('addition function exists', () => {
    //where you're calling the import
  expect(typeof addition).toEqual('function');
});

test('adds two positive numbers and returns result', () => {
  expect(addition(1, 2)).toBe(3);
  // you EXPECT if you pass the arguments (1, 2) into the function, that the output is 3
})
test('adds two negative numbers and returns result', () => {
  expect(addition(-1, -2)).toBe(-3);
})

// write some yourself! what if both numbers were negative? what about if one number was positive and the other one negative? how about if one of the numbers is 0?

// run `yarn run test` to try it out!
