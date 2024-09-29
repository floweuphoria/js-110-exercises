dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"

function dms(number) {
  let degrees = Math.floor(number);
  let minutes = Math.floor((number - degrees) * 60);
  number -= degrees;
  let seconds = Math.floor((number * 60 - minutes) * 60);
  console.log(
    `${padZeroes(degrees)}°${padZeroes(minutes)}'${padZeroes(seconds)}"`
  );
}

function padZeroes(number) {
  return String(number).length < 2 ? `0${number}` : `${number}`;
}
