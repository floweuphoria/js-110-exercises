const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function formatTime(minutes, hours) {
  minutes = String(minutes);
  hours = String(hours);
  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
}

function timeOfDay(deltaMin) {
  // 1. Ensure deltaMin is in the 0 to MINUTES_PER_DAY range
  if (deltaMin < 0) {
    deltaMin = (deltaMin % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMin = deltaMin % MINUTES_PER_DAY;
  }
  // 2. Calculate hours and min
  let minutes = deltaMin % MINUTES_PER_HOUR;
  let hours = Math.floor(deltaMin / MINUTES_PER_HOUR);

  return formatTime(minutes, hours);
}

// console.log(timeOfDay(0)); // === '00:00');
// console.log(timeOfDay(-3)); // === '23:57');
// console.log(timeOfDay(35)); // === '00:35');
// console.log(timeOfDay(-1437)); // === '00:03');
// console.log(timeOfDay(3000)); // === '02:00');
// console.log(timeOfDay(800)); // === '13:20');
// console.log(timeOfDay(-4231)); // === '01:29');

console.log(timeOfDay(0) === '00:00');
console.log(timeOfDay(-3) === '23:57');
console.log(timeOfDay(35) === '00:35');
console.log(timeOfDay(-1437) === '00:03');
console.log(timeOfDay(3000) === '02:00');
console.log(timeOfDay(800) === '13:20');
console.log(timeOfDay(-4231) === '01:29');
