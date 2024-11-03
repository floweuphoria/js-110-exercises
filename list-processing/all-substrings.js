console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function substrings(string) {
  function leadingSubstrings(string) {
    let substrings = [];

    for (let length = 1; length <= string.length; length += 1) {
      substrings.push(string.slice(0, length));
    }

    // console.log(substrings);
    return substrings;
  }

  let substrings = [];

  string.split('').forEach((_, idx) => {
    substrings.push(leadingSubstrings(string.slice(idx)));
  });

  leadingSubstrings(string);

  return substrings;
}
