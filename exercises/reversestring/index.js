// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger
  return str.split('').reduce((reversed, character) => character + reversed, '')
}

reverse('buski')
module.exports = reverse;


// function reverse(str) {
//   let reversedString = ""

//   for(let character of str) {
//     reversedString = character + reversedString
//   }

//   return reversedString
// }