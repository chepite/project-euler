let number1=1;
let number2=2;
let som = 2;

const fix =()=>{
while(som < 4000000){
    let nextnumber = number1+ number2;
    if (nextnumber % 2 === 0) {
        som += nextnumber;
    }
    console.log(som);
    number1 = number2;
    number2 = nextnumber;
    nextnumber= 0;
}
console.log(som);}

const init =()=>{
    fix();
}
init();