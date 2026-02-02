let i ;
let countFizz = 0;
for (i = 1; i < 51; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log("Fizz");
        countFizz++;
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
}
console.log(`Tổng của tất cả các số đã in ra chữ "Fizz" là: ${countFizz}`);