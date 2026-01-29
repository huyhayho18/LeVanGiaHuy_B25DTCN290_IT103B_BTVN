let bookName = prompt("Nhập tên sách");
let status = prompt("Nhập trạng thái sách");
let year = +prompt("Năm suất bản");

if (status = "có sẵn" && 2026 - year <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
} else if (status = "đã mượn" && 2026 - year <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (status = "đã mượn" && 2026 - year < 10) {
    console.log("Sách này đã mượn và khá cũ");
} else if (status = "đã mượn" && 2026 - year > 5)   {
    console.log("Sách này có sẵn nhưng đã lâu năm");
}