console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"

function integerToString(number) {
  let places = [];

  let numDigits = 1;
  let divisor = 10;

  while (number / divisor >= 1) {
    numDigits += 1;
    divisor *= 10;
  }

  for (let i = 1; i < numDigits + 1; i += 1) {
    let digit = number % 10;
    places.unshift(digit);
    number = (number - digit) / 10;
  }

  return places.join('');
}
