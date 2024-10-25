multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"

function multiplicativeAverage(arr) {
  let result = 1;
  let length = arr.length;

  arr.forEach((item) => {
    result *= item;
  });

  result /= length;
  result = result.toFixed(2);
  console.log(result);
  return result;
}
