let bookName = prompt("Nhập tên sách");
let typeBook = prompt("Nhập thể loại sách");
let statuBook = prompt("Nhập tình trạng sách");

if (typeBook == "Khoa học" || typeBook == "Lịch sử") {
    if (statuBook == "có sẵn") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (typeBook == "Văn học" || typeBook == "Truyện") {
    console.log("Sách này có thể đọc giải trí");
}