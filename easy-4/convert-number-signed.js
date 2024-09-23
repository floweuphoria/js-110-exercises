const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    result = remainder + result;
  } while (number > 0);
  return result;
}

function signedIntegerToString(number) {
  if (Object.is(number, -0)) return '-0';

  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
      break;
    case 1:
      return `+${integerToString(number)}`;
      break;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === '+4321');
console.log(signedIntegerToString(-123) === '-123');
console.log(signedIntegerToString(0) === '0');
