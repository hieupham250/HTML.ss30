function recursive(n) {
    if(n === 1 || n === 2){
        return 1;
    }
    return recursive(n-1) + recursive(n-2);
}

n = +prompt("nhập n:");
if(isNaN(n) || n<0){
    console.log("nhập số dương");
} else {
    console.log(recursive(n));
}