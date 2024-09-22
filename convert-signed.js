console.log(stringToSignedInteger('4321') === 4321); // logs true
console.log(stringToSignedInteger('-570') === -570); // logs true
console.log(stringToSignedInteger('+100') === 100); // logs true

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
  });
  return value;
}

function stringToSignedInteger(string) {
  if (string[0] === '+' || string[0].match(/[0-9]/g)) {
    return stringToInteger(string.replace('+', ''));
  } else if (string[0] === '-') {
    return -stringToInteger(string.slice(1));
  }
}
