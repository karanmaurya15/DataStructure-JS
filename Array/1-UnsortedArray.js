//a: Generate 10 random 3-digit numbers
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 900) + 100);
}

//b: Store the numbers in an array
let numbersArray = randomNumbers;

//c : Find the 2nd largest and 2nd smallest element
let secondLargest = Number.MIN_SAFE_INTEGER;
let secondSmallest = Number.MAX_SAFE_INTEGER;
let largest = Number.MIN_SAFE_INTEGER;
let smallest = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > largest) {
        secondLargest = largest;
        largest = numbersArray[i];
    } else if (numbersArray[i] > secondLargest) {
        secondLargest = numbersArray[i];
    }
    if (numbersArray[i] < smallest) {
        secondSmallest = smallest;
        smallest = numbersArray[i];
    } else if (numbersArray[i] < secondSmallest) {
        secondSmallest = numbersArray[i];
    }
}

console.log("2nd Largest: " + secondLargest);
console.log("2nd Smallest: " + secondSmallest);
