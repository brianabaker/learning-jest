
// Let's write an anagram function, and test it with jest!

// Two strings are anagrams if they use the same characters in the same quantities -- ignoring whitespaces and punctuation.

// this is my anagram function
function anagrams(strA, strB){
  return cleanString(strA) === cleanString(strB)
}

// helper function to ignore whitespaces, capitilization, and punctuation
function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// don't forget to export
module.exports = anagrams;
