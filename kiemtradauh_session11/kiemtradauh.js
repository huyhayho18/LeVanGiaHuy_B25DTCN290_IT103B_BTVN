let products = [
    { id: "P01", name: "Laptop Macbook Pro M3", price: 2000, category: "Laptop", inStock: true},
    { id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true},
    { id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false},
    { id: "P04", name: "Màn hình Dell UtralSharp", price: 450, category: "Màn hình", inStock: true},
    { id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true},
]

let search = products.filter( value => value.id === "P03" );

if(search.length === 0) {
    console.log(`Không tìm thấy sản phẩm`);
} else {
    console.log(search);
}

let check = products.every(value => value.price > 0);
if (check) {
    console.log(`Dữ liệu bảng giá hợp lệ`);
}
let catalogDisplay = products.map(products => {
    console.log(`${products.name} - Giá: ${products.price} | Trạng thái: ${products.inStock}`)
})