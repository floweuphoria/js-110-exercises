const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

// console.log(afterMidnight('00:00') === 0);
// // console.log(beforeMidnight('00:00') === 0);
// console.log(afterMidnight('12:34') === 754);
// // console.log(beforeMidnight('12:34') === 686);
// console.log(afterMidnight('24:00') === 0);
// console.log(beforeMidnight('24:00') === 0);
console.log(beforeMidnight('00:00'));
console.log(beforeMidnight('12:34'));

``;

function afterMidnight(timeOfDay) {
  let [hours, minutes] = timeOfDay.split(':').map((digits) => Number(digits));
  return (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeOfDay) {
  let [hours, minutes] = timeOfDay.split(':').map((digits) => Number(digits));

  return { hours, minutes };
}
