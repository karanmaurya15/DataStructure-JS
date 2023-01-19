let repeatedDigits = [];
for (let i = 0; i <= 100; i++) {
    let digits = i.toString().split("");
    if (new Set(digits).size !== digits.length) {
        repeatedDigits.push(i);
    }
}
console.log(repeatedDigits);
