
// writing tests that compare two arguments, and output either true or false!

const anagrams = require("./anagrams")

test('"Flowers" is an anagram of "Srewolf"', () => {
  expect(anagrams('Flowers', 'Srewolf')).toBeTruthy()
})
test('"a racecar" is an anagram of "a car race" to be true', () => {
  expect(anagrams('a racecar', 'a car race')).toBeTruthy()
})

// Try it out!
// how to you test if the function exists?
// How would you test if it was falsy?
// HINT: toBe...()
