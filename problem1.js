let number = 1;

let som = 0

const fixsom = () => {
    for (i = 0; i < 1000; i++) {
        if (i % 3 == 0 | i % 5 == 0) {
            som += i;
        }
    }
    console.log(`${som}`);
}
    const init = () => {
        fixsom();
    }

    init();

    //answer: 233168