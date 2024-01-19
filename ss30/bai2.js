function printOddElements(n){
    const old = [];
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum += i
        if(i%2!=0){
            old.push(i);
        }
    }
    if(sum%2==0){
        old.pop();
    }
    console.log('Tổng: ' + sum);
    console.log(`các số lẻ:${old}`);
}

let n = +prompt("nhập số dương: ");
if(isNaN(n) || n<0){
    console.log("số không hợp lệ");
} else {
    printOddElements(n);
}