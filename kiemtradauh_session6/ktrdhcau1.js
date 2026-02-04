let studentName = "Quý, Nam, Lan, Hùng, Nam";
let students = studentName.split(", ");
    console.log(students);
let reverseStudent = students.reverse();
    console.log(reverseStudent);
if (students.includes("Lan") == true) {
    console.log(`Tên Lan tồn tại trong mảng`)
} else {
    console.log(`Tên Lan không tồn tại trong mảng`)
}
console.log(`Vị trí (index) đầu tiên của tên "Nam" trong mảng là: ${students.indexOf("Nam")}`);