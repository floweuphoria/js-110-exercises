sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]

// function sequence(num) {
//   let arr = [];
//   for (let i = 1; i <= num; i += 1) {
//     arr.push(i);
//   }
//   console.log(arr);
//   return arr;
// }

function sequence(num) {
  let arr = Array.from({ length: num }).map((_, idx) => {
    return idx + 1;
  });

  console.log(arr);
}
