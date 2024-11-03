let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'suv',
  'motorcycle',
  'car',
  'truck',
];

countOccurrences(vehicles);

function countOccurrences(vehicles) {
  let occurances = {};
  vehicles.forEach((vehicle) => {
    vehicle = vehicle.toLowerCase();
    occurances[vehicle] = occurances[vehicle] || 0;
    occurances[vehicle] += 1;
  });
  // console.log(occurances);
  for (vehicle in occurances) {
    console.log(`${vehicle} => ${occurances[vehicle]}`);
  }
}

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
