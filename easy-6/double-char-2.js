console.log(doubleConsonants('String')); // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
console.log(doubleConsonants('')); // ""

function doubleConsonants(str) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
  let chars = str.split('');
  let doubled = chars.map((char) => {
    if (CONSONANTS.indexOf(char)) {
      return char + char;
    } else {
      return char;
    }
  });
  return doubled.join('');
}
