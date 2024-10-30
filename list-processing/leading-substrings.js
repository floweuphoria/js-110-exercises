leadingSubstrings('abc'); // ["a", "ab", "abc"]
leadingSubstrings('a'); // ["a"]
leadingSubstrings('xyzzy'); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(string) {
  let substrings = [];

  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  console.log(substrings);
}
