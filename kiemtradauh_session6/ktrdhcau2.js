arr = [100, 200, 300, 400];
for (arr of arr) {
    console.log(arr);
}
let result = 0;
let i;
for (i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        result = result + arr[i];
    }
}
console.log(result);