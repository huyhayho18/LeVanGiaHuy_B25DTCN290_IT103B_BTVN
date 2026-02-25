let orders = ["Đơn hàng A","Đơn hàng B","Đơn hàng C","Đơn hàng D","Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

let orderReports = orders.map((order, index) => {
    console.log(`${index} mang về ${revenues[index]} USD`)
});
let sumrevemues = revenues.filter(revenue => revenue > 0 ).reduce((total, revenue) => total + revenue, 0);
console.log(`Tổng doanh thu: ${sumrevemues}`
);