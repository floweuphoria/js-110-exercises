console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"

function dms(number) {
  let degrees = Math.floor(number);
  let minutes = Math.floor((number - degrees) * 60);
  number -= degrees;
  let seconds = Math.floor((number * 60 - minutes) * 60);
  return `${padZeroes(degrees)}°${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  return String(number).length < 2 ? `0${number}` : `${number}`;
}
