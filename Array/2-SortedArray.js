//Step 1: Generate 10 random 3-digit numbers
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 900) + 100);
}

//Step 2: Store the numbers in an array
let numbersArray = randomNumbers;

//Step 3: Sort the array
numbersArray.sort(function(a, b) {
    return a - b;
});

//Step 4: Find the 2nd largest and 2nd smallest element
let secondLargest = numbersArray[numbersArray.length - 2];
let secondSmallest = numbersArray[1];
console.log("2nd Largest: " + secondLargest);
console.log("2nd Smallest: " + secondSmallest);
