//TS TEST
//yoinked from problem3
{
function isPrime(num: number):boolean {
    let answer:boolean = true;
    if (num <= 1) { answer = false; } // negatives
    if (num % 2 == 0 && num > 2) { answer = false; } // even 
    let s = Math.sqrt(num); // store the sqrt 
    for (let i = 3; i <= s; i++) { // start from 3, stop at the sqrt
        if (num % i === 0) { answer = false; }
        // modulo found? divisor found? -> no prime
    }
    return answer
}

function fix():void {
    let numberOfprimes:number = 0;
    let i:number = 2;
    //10 000 ipv 10 001 omdat ik bij 2 begin wat eigenlijk een priem is dus ik skip het eerste priem wat het 10 001 ste priem de 10 000 maakt in men while loop
    //brrrrrrrrrrrrrrrrrrrr
   while (numberOfprimes !== 10000) {
       i++
       if(isPrime(i) === true){
           numberOfprimes++;
       }
   }
    console.log(i);
    console.log(numberOfprimes +1);
    console.log(isPrime(i));
}

fix();
}