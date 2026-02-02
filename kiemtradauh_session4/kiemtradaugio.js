let n = +prompt("Nhập số nguyên n");
if (n % 2 == 0) {
    console.log(`Số ${n} là số chẵn`);
} else {
    console.log(`Số ${n} là số clẻ`);
}
if (n > 0) {
    let i;
    for (i = 1; i < n+1;i++) {
        console.log(` ${i}`)
    }
} else {
    console.log("Giá trị n không hợp lệ để tạo dãy số");
}