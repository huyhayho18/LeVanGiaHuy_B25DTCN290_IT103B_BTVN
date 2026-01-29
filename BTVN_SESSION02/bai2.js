let amount = +prompt("Nhập số lượng sách trong thư viện");

if (amount < 10) {
    console.log("Thư viện có ít sách");
} else if (10 <= amount && amount <= 20) {
    console.log("Thư viện có số lượng sách vừa đủ");
} else {
    console.log("Thư viện có nhiều sách");
}