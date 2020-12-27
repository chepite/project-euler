//yoinked from problem3
function isPrime(num) {
    let answer = true;
    if (num <= 1) { answer = false; } // negatives
    if (num % 2 == 0 && num > 2) { answer = false; } // even 
    let s = Math.sqrt(num); // store the sqrt 
    for (let i = 3; i <= s; i++) { // start from 3, stop at the sqrt
        if (num % i === 0) { answer = false; }
        // modulo found? divisor found? -> no prime
    }
    return answer
}

function fix() {
    //ie zegt het is geen prime, maar ie gaat wel prime++ doen terwijl dater if staat
    let numberOfprimes = 0;
    let i = 3;
    for(numberOfprimes; numberOfprimes < 1001;){
        if(isPrime(i) === true){
            numberOfprimes++;
            i++;
        }
        else{
            i++;
        }
    }
    console.log(i);
    console.log(numberOfprimes);
    console.log(isPrime(i));
}

fix();