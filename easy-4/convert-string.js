console.log(stringToInteger('4321') === 4321); // logs true
console.log(stringToInteger('570') === 570); // logs true

// function stringToInteger(string) {
//   let array = string.split('').reverse();
//   let result = 0;
//   array.forEach((value, idx) => {
//     result += value * 10 ** idx;
//   });
//   return result;
// }

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let value = 0;
  let array = string.split('').map((number) => DIGITS[number]);
  array.forEach((digit) => {
    value = 10 * value + digit;
    console.log({ digit, value });
  });
  return value;
}
