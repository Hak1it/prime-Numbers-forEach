let num = [2,5,4,7,6,7,54,4,]

function primeNumber (num) {
        if(num % 2 == 1){
            return true
        }else{
            return false
        }
}


num.forEach((num) => {
    const isPrime = primeNumber(num);
    if (isPrime) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is NOT a prime number`);
    }
});
  
