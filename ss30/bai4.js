function checkPrime(arr, n) {
    for(let i=0;i<n;i++){
        let isPrime = 1;
        if(arr[i]>1){
            for(let j=2;j<=Math.sqrt(arr[i]);j++){
                if(arr[i]%j==0){
                    isPrime = 0;
                    break;
                }
            }
        }else{
            isPrime=0;
        }
        if(isPrime == 1){
            console.log(arr[i]);
        }
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let n = arr.length;
checkPrime(arr, n);