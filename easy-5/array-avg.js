average([1, 5, 87, 45, 8, 8]); // 25
average([9, 47, 23, 95, 16, 52]); // 40

function average(array) {
  let result = array.reduce((accumulator, currentNum, index) => {
    // console.log(sumToNow);
    accumulator + currentNum;
    return accumulator + currentNum;
  }, 0);
  result = Math.floor(result / array.length);
  console.log(result);
}
