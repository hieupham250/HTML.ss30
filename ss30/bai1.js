function checkArr(arr) {
    let flag = true;
    for(let i=0;i<arr.length/2;i++){
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[i] !== arr[j]){
                flag = false;
            } else {
                flag = true;
            }
        }
    }
    return flag;
}

let arr =  [1, 2, 3, 2, 1];
if(checkArr(arr)){
    console.log("không phải mảng đối xứng");
} else {
    console.log(arr);
}