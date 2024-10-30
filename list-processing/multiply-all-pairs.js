multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]

// function multiplyAllPairs(arr1, arr2) {
//   let multiples = [];

//   for (let i = 0; i < arr1.length; i += 1) {
//     for (let j = 0; j < arr2.length; j += 1) {
//       multiples.push(arr1[i] * arr2[j]);
//     }
//   }

//   multiples = multiples.sort((a, b) => a - b);

//   console.log(multiples);
// }

function multiplyAllPairs(arr1, arr2) {
  let result = [];

  arr1.forEach((num1) => {
    arr2.forEach((num2) => result.push(num1 * num2));
  });

  result = result.sort((a, b) => a - b);

  console.log(result);
}
