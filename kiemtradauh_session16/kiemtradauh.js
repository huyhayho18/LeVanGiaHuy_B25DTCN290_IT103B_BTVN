let listTask = [
    {name: 'nấu cơm' },
    {name: 'rửa rau'},
    {name: 'dọn nhà'}
]

let inputTask = document.getElementById(`taskInput`);
let addBtn = document.getElementById(`addBtn`);
let taskLisk = document.getElementById('taskList');

addBtn.addEventListener(`click`,create)

function create() {
    let newList = {
        name: inputTask.value
    }
    if(inputTask.value.trim() ==='') {
        alert('Vui lòng nhập tên công việc!');
        return;
    }
    listTask.push(newList);
    taskLisk.innerHTML= `
        <li>${newList.name}</li>
    `
    inputTask.innerHTML ='';
}
console.log(listTask)