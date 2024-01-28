function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function checkPrime() {
    let userInput = prompt("Enter a number to check if it's prime:");

        let number = parseInt(userInput);
        let result = isPrime(number);

        if (result) {
            alert(`${number} is a prime number.`);
        } else {
            alert(`${number} is not a prime number.`);
        }
    }

checkPrime();
