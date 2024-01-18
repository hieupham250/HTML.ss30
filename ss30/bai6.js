function checkTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function count(arr) {
    let count = 0;
    const n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (checkTriangle(arr[i], arr[j], arr[k])) {
                    count++;
                }
            }
        }
    }

    return count;
}

const arr = [];
for(let i=0;i<8;i++){
    arr.push(Math.floor(Math.random() * 10));
}
const result = count(arr);
console.log(`Số lượng tam giác có thể tạo ra từ mảng là: ${result}`);
