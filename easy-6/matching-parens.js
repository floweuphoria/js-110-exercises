console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);

// console.log(isBalanced('What (is) this?'));
// console.log(isBalanced('What is) this?'));
// console.log(isBalanced('((What) (is this))?'));

function isBalanced(str) {
  let strArray = str.split('');

  let parensString = strArray.filter((char) => '()'.includes(char)).join('');

  if (parensString.length === 0) {
    return false;
  }

  if (
    parensString[0] === ')' ||
    parensString[parensString.length - 1] === '('
  ) {
    return false;
  }
  if (parensString.match(/\(/g).length !== parensString.match(/\)/g).length) {
    return false;
  }
  // console.log(parensString);
  return true;
}
