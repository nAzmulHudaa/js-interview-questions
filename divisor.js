function greatestCommonDivisor(a,b){
    var divisor = 2;
    var greatestDivsior = 1;
    if(a<2 || b<2){
        return 1;
    }
    while(a >= divisor && b>= divisor){
        if(a % divisor  ==0 && b % divisor ==0){
            greatestDivsior = divisor;
        }
        divisor++
    }
    return greatestDivsior;
}
console.log(greatestCommonDivisor(14,21));