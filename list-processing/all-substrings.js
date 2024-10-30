substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function substrings(string) {
  let result = [];
  function leadingSubstrings(string) {
    let substrings = [];

    for (let length = 1; length <= string.length; length += 1) {
      substrings.push(string.slice(0, length));
    }

    return substrings;
  }

  for (let i = 0; i < string.length; i += 1) {
    result.push(leadingSubstrings(string.slice(i)));
  }

  console.log(result);
}
