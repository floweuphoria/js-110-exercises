digitList(12345); // [1, 2, 3, 4, 5]
digitList(7); // [7]
digitList(375290); // [3, 7, 5, 2, 9, 0]
digitList(444); // [4, 4, 4]

function digitList(digits) {
  let digitsStringArray = String(digits).split('');
  let result = digitsStringArray.map((digitString) => Number(digitString));
  console.log(result);
}
