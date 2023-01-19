const birthMonths = new Map();

for (let i = 0; i < 50; i++) {
  // Generate a random month between 1 and 12
  const month = Math.floor(Math.random() * 12) + 1;
  if (birthMonths.has(month)) {
    // If the month already exists in the map, add the individual to the existing array
    birthMonths.get(month).push(i);
  } else {
    // If the month doesn't exist in the map, create a new array with the individual
    birthMonths.set(month, [i]);
  }
}

console.log(birthMonths);

// Iterate over the map and print out individuals with birthdays in the same month
for (let [month, individuals] of birthMonths) {
  console.log(`Individuals with birthdays in month ${month}: ${individuals}`);
}
