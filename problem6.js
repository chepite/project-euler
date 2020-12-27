const fix = () =>{
    let squaresumGround = 0;
    let sumsquare = 0;
    for(i = 0; i < 101; i++){
        squaresumGround+=i;

        sumsquare+= Math.pow(i, 2);
    }
    let squaresum= Math.pow(squaresumGround, 2);
    console.log( squaresum-sumsquare);
    
    
}
fix();
