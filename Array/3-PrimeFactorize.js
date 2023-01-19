function primeFactors(n) {
    let primeFactorsArray = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            primeFactorsArray.push(i);
            n = n / i;
        }
    }
    return primeFactorsArray;
}
let number = 40;
let primeFactorsArray = primeFactors(number);
console.log("Prime factors of " + number + " are: " + primeFactorsArray);
