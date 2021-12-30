// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = []
  let index = 0

  while(index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked
}

module.exports = chunk;

// function chunk(array, size) {
//   let loopCount = array.length / size
//   let reminder = array.length % size
//   let startIndex = 0
//   let result = []
//   for(let i=1 ; i<= loopCount; i++) {
//     result.push(array.slice(startIndex, startIndex + size))
//     startIndex += size
//   }

//   if(reminder > 0) {
//     result.push(array.slice(array.length - reminder))
//   }
//   return result
// }