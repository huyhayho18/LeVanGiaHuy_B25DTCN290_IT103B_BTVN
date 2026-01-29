let bookName = prompt("Nhập tên sách");
let name = prompt("Nhập tên tác giả");
let year = +prompt("Nhập năm suất bản");

if (year == 2026) {
    console.log("Đây là sách mới");
} else if (2026 - year < 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}