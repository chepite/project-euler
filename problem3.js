//find the biggest prime divider of the following number
const deelnummer = 600851475143;

function isPrime(num) {
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    let s = Math.sqrt(num); // store the sqrt to loop faster
    for (let i = 3; i <= s; i++) { // start from 3, stop at the sqrt, increment
        if (num % i === 0) return false; // modulo found? divisor found -> no prime
    }
    return true;
}


let bigPrime = 0;
//bepaal grootste prime number
const fix =()=>{
    
    let i= 0;
    let ar= new Array();
    let sum = 1;
   
    while(deelnummer !== sum){
       
        if(isPrime(i) === true &&  deelnummer % i === 0 && ar[i]!== 0){
            bigPrime = i;
            console.log(bigPrime);
            ar.push(bigPrime);
            sum = sum * ar[ar.length-1]; 
            i++
        }
        else{
            i++;
        }
    }
    console.log(`the answer is ${bigPrime}`)
}  

    console.log(bigPrime);

const init=()=>{
    fix();
}

init();
