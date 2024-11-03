reverseWords('Professional'); // "lanoisseforP"
reverseWords('Walk around the block'); // "Walk dnuora the kcolb"
reverseWords('Launch School'); // "hcnuaL loohcS"

function reverseWords(str) {
  let wordsArray = str.split(' ');
  let result = wordsArray
    .map((word) => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
    })
    .join(' ');
  console.log(result);
}
