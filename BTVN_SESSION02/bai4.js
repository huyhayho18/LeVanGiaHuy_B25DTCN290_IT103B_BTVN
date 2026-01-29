let bookName = prompt("Nhập tên sách");
let name = prompt("Nhập tên người mượn");
let rateFavorite = +prompt("Mức độ yêu thích(1-5)");

switch (rateFavorite) {
    case 1:
    case 2:
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
        break;
    case 3:
        console.log("Sách này khá ổn, có thể mượn");
        break;
    case 4:
    case 5:
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
        break;
    default:
        console.log("Vui lòng nhập mức độ yêu thích từ 1-5");
}