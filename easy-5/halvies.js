halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]

function halvsies(arr) {
  let halfwayPoint = Math.ceil(arr.length / 2);
  let result = [arr.slice(0, halfwayPoint), arr.slice(halfwayPoint)];
  console.log(result);
}
