console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]

function interleave(arr1, arr2) {
  let result = arr1.reduce((accum, curr, idx) => {
    return [...accum, curr, arr2[idx]];
  }, []);
  return result;
}
