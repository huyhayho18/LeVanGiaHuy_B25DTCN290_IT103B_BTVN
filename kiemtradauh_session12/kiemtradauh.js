let products = [
    { id: "P01", name: "Laptop Macbook Pro M3", price: 2000, category: "Laptop", inStock: true},
    { id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true},
    { id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false},
    { id: "P04", name: "Màn hình Dell UtralSharp", price: 450, category: "Màn hình", inStock: true},
    { id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true},
]

const status = products.filter((value) => value.inStock === true)
console.log(status);


let newarr = products.filter((value) => value.category === "Phụ kiện");
delete newarr.id;
delete newarr.price;
delete newarr.category;
delete newarr.inStock;
console.log(newarr);

const total = status.reduce((acc, value) => acc + value.price, 0);
console.log(total);

