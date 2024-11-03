swapName('Joe Roberts'); // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals'); // "Ragvals, Karl Oskar Henriksson"

function swapName(name) {
  let result = name.split(' ').reverse();
  result[0] = result[0] + ',';
  result = result.join(' ');
  console.log(result);
  return result;
}
