console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]

function copyNonDupsTo(resultsArray, array) {
  array.forEach((item) => {
    if (!resultsArray.includes(item)) resultsArray.push(item);
  });
}

function union(...args) {
  let newArray = [];
  args.forEach((array) => {
    copyNonDupsTo(newArray, array);
  });
  return newArray;
}
