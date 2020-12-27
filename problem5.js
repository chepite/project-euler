const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let i = 2520;

function checknumbers(getal) {

    if (i % getal == 0) {
        return true;
    }
    else {
        return false;

    }
}
function fix() {


    while (numbers.every(checknumbers) !== true) {

        i += 2520;
        console.log(i);

    }
    console.log(`answer is ${i}`);

}

const init = () => {
    fix();
}
init();

/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */