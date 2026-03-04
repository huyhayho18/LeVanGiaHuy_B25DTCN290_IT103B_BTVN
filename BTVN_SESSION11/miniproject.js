let nextId = 5

const students = [
    {id: 1, name: `Nguyen Van A`, age: 18, gpa: 4.6, status: `active`},
    {id: 2, name: `Nguyen Van B`, age: 18, gpa: 4.6, status: `active`},
    {id: 3, name: `Nguyen Van C`, age: 18, gpa: 4.6, status: `active`},
    {id: 4, name: `Nguyen Van D`, age: 18, gpa: 4.6, status: `active`}
]

// 1. CREATE
function createStudent() {
  const name = prompt("Ho ten sinh vien:");
  if ( name.trim() === "") 
    return alert("Ten khong duoc de trong!");
  const age = Number(prompt("Tuoi:"));
  if (isNaN(age) || age <= 0) 
    return alert("Tuoi khong hop le!");
  const gpa = Number(prompt("GPA (0 - 10):"));
  if (isNaN(gpa) || gpa < 0 || gpa > 10) 
    return alert("GPA khong hop le!");
  const status = prompt("Trang thai (active / inactive):").trim().toLowerCase();
  if (status !== "active" && status !== "inactive") 
    return alert("Trang thai chi la 'active' hoac 'inactive'!");
  const student = { id: nextId++, name: name.trim(), age, gpa, status };
  students.push(student);
  alert(`Them sinh vien thanh cong!
        ID: ${student.id} | Ten: ${student.name} | Tuoi: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}`);
}

// 2. READ
function readAllStudents() {
  if (students.length === 0) return alert("Danh sach trong.");
  let msg = `DANH SACH SINH VIEN (${students.length} ban ghi)\n\n`;
  students.forEach((s) => {
    msg += `ID: ${s.id} | Ten: ${s.name} | Tuoi: ${s.age} | GPA: ${s.gpa.toFixed(1)} | Status: ${s.status}\n`;
  });
  console.table(students);
  alert(msg);
}

// 3. FILTER
function filterScholarship() {
  const candidates = students.filter((s) => s.gpa > 8.0);
  if (candidates.length === 0) return alert("Khong co sinh vien nao du dieu kien hoc bong (GPA > 8.0).");
  let msg = `HOC BONG - GPA > 8.0 (${candidates.length} sinh vien)\n\n`;
  candidates.forEach((s) => {
    msg += `ID: ${s.id} | Ten: ${s.name} | GPA: ${s.gpa.toFixed(1)} | Status: ${s.status}\n`;
  });
  console.table(candidates);
  alert(msg);
}

// 4. UPDATE
function updateStudent() {
  const id = Number(prompt("ID sinh vien can cap nhat:"));
  const student = students.find((s) => s.id === id);
  if (!student) return alert(`Khong tim thay sinh vien voi ID = ${id}`);
  const newName = prompt(`Ten moi (de trong giu nguyen "${student.name}"):`);
  if (newName && newName.trim() !== "") student.name = newName.trim();
  const newGpa = Number(prompt(`GPA moi (de trong giu nguyen ${student.gpa}):`));
  if (!isNaN(newGpa) && newGpa >= 0 && newGpa <= 10) student.gpa = newGpa;
  alert(`Cap nhat thanh cong!\nID: ${student.id} | Ten: ${student.name} | GPA: ${student.gpa.toFixed(1)}`);
}

// 5. DELETE
function deleteStudent() {
  const id = Number(prompt("ID sinh vien can xoa:"));
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return alert(`Khong tim thay sinh vien voi ID = ${id}`);
  const removed = students.splice(index, 1)[0];
  alert(`Da xoa sinh vien: ID ${removed.id} - ${removed.name}`);
}

// 6. COMPLIANCE VERIFICATION
function complianceVerification() {
  if (students.length === 0) return alert("Danh sach trong.");
  const hasUnderAge = students.some((s) => s.age < 18);
  const allActive   = students.every((s) => s.status === "active");
  alert(
    `Ton tai sinh vien duoi 18 tuoi: ${hasUnderAge}\n` +
    `Tat ca deu la "active": ${allActive}`
  );
}

// 7. ACADEMIC STATISTICS
function academicStatistics() {
  if (students.length === 0) return alert("Danh sach trong.");
  const totalGPA = students.reduce((acc, s) => acc + s.gpa, 0);
  const avgGPA   = totalGPA / students.length;
  alert(`GPA trung binh: ${avgGPA.toFixed(2)}`);
}

// 8. DATA NORMALIZATION
function dataNormalization() {
  if (students.length === 0) return alert("Danh sach trong.");
  const normalizedList = students.map((s) => ({ ...s, name: s.name.toUpperCase() }));
  let msg = "TEN SINH VIEN DA CHUAN HOA (UPPERCASE)\n\n";
  normalizedList.forEach((s) => {
    msg += `ID: ${s.id} | Ten: ${s.name}\n`;
  });
  msg += "\n(Ban sao moi - danh sach goc khong thay doi)";
  console.table(normalizedList);
  alert(msg);
}

// MENU - while + switch
function main() {
  while (true) {
    const choice = prompt(
      "QUAN LY SINH VIEN\n" +
      "1. Create Student\n" +
      "2. Read All Students\n" +
      "3. Filter Scholarship Candidates\n" +
      "4. Update Student Profile\n" +
      "5. Delete Record\n" +
      "6. Compliance Verification\n" +
      "7. Academic Statistics\n" +
      "8. Data Normalization\n" +
      "0. Thoat\n" +
      "Lua chon:"
    );

    if (choice === null || choice === "0") break;

    switch (choice.trim()) {
      case "1": 
        createStudent();          
        break;
      case "2": 
        readAllStudents();        
        break;
      case "3": 
        filterScholarship();      
        break;
      case "4": 
        updateStudent();          
        break;
      case "5": 
        deleteStudent();          
        break;
      case "6": 
        complianceVerification(); 
        break;
      case "7": 
        academicStatistics();     
        break;
      case "8": 
        dataNormalization();      
        break;
      default:  alert("Lua chon khong hop le!");
    }
  }
}

main();