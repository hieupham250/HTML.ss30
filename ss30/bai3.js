function characterOrder(str) {
    let letters = [];
    let digits = [];
    let specials = [];
    for(let char of str){
        if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z'){
            letters.push(char);
        } else if(!isNaN(char)){
            digits.push(char);
        } else {
            specials.push(char);
        }
    }
    let array = letters.concat(digits, specials);
    return array;
}

let input = prompt("nhập chuỗi bất kì:");
let result = characterOrder(input);
console.log(result);