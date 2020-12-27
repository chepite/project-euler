const checkpalindrome = (getal) =>{
    getalArr = getal.toString();
    reverseGetal= getal.toString().split("").reverse().join("");
    if(getalArr=== reverseGetal)
    {
        return true;
    }
    else{
        return false;
    }
}

const fix = () =>{
    bigPalindrome = 0;
    for(i = 999; i > 0; i--)
    {
        for (j = 999; j > 0; j--) {
            current= i*j
            if(checkpalindrome(current)&& current> bigPalindrome){
                bigPalindrome = current;
            }
            else{
                current= 0;
            }
        }
    }
    console.log(bigPalindrome);
}

const init= ()=>{
    fix();
}
init();