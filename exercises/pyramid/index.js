// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' row=1  01234
//       ' ### ' row=2 -10123
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n, row = 0, level = "") {
  if (row === n) return;
  //n =2 [0, 1, 2]
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let midpoint = Math.floor((2 * n - 1) / 2); // 1
  if (
    // 1 - 0 >= 0
    level.length >= midpoint - row &&
    level.length <= midpoint + row
  ) {
    level += "#";
  } else {
    level += " ";
  }

  pyramid(n, row, level);
}

module.exports = pyramid;

// function pyramid(n) {
//   // n = 2
//   let numColumns = 2 * n - 1; // 3
//   let middle = Math.floor(numColumns / 2); // 2
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let col = 0; col < numColumns; col++) {
//       if (col >= middle - row && col <= middle + row) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }
