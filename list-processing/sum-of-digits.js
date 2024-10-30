sum(23); // 5
sum(496); // 19
sum(123456789); // 45

function sum(number) {
  let result = String(number)
    .split('')
    .reduce((total, currentDigit) => total + Number(currentDigit), 0);
  console.log(result);
}
