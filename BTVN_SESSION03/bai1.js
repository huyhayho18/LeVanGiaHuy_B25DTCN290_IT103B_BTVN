let turn = prompt(`Hôm nay có bao nhiêu lượt mượn sách`);
let countTurn = turn;
for (let i = 0; i < turn ; i++) {
    let nameBorrow = prompt(`Tên người mượn: ${i + 1}`);
    let nameBook = prompt(`Tên sách: `);
    let dayBorrow = +prompt(`Số ngày mượn: `);
    if (dayBorrow > 14) {
        alert(`Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)`);
        countTurn--;
    } else if (dayBorrow <= 14) {
        alert(`Mượn thành công`);
    }
}
alert(`Tổng số lượt mượn: ${countTurn}`);