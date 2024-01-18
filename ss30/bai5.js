function endCaps(str) {
    let arrWorld = str.split(' ');
    for(let i=0;i<arrWorld.length;i++){
        let currentWord = arrWorld[i];
        let lastChar = currentWord.charAt(currentWord.length - 1);
        let capitalizedLastChar = lastChar.toUpperCase();
        arrWorld[i] = currentWord.slice(0, -1) + capitalizedLastChar;
    }
    let resultStr = arrWorld.join(' ');
    return resultStr;
}

let str = prompt("Nhập chuỗi:");
let result = endCaps(str);
console.log(result);