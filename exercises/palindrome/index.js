// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let j = str.length

  return str.split("").every((val, i) => {
    return val === str[str.length - i - 1]
  })
}

module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str.split("").reduce((rev, char) => char + rev, '')

//   return str === reversed
// }