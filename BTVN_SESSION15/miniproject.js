let listTask = [];
let inputTask = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener(`click`, createTask);
inputTask.addEventListener(`keypress`,(e) => {
    if (e.key === `Enter`)
        createTask();
})
function createTask() {
    let valueInput = inputTask.value
    if(valueInput.trim() === ``){
        alert(`Vui lòng nhập tên công việc!`);
        return;
    }
    let newTask = {
        id: Date.now(),
        name: valueInput,
        status: false
    }
    listTask.push(newTask);
    inputTask.value = ``;
    inputTask.focus();
    renderTask();
}

function renderTask() {
    taskList.innerHTML =``;
    if (listTask.length === 0) {
        taskList.innerHTML = `
            <div>
                <div>📋</div>
                <div>Chưa có công việc nào. Hãy thêm công việc mới!</div>
            </div>
        `
        return;
    }
    listTask.forEach((task) => {
        let showList = document.createElement(`div`);
        showList.innerHTML = `
            <input type="checkbox" class="task-checkbox"/>
            <span class="task-text">${task.name}</span>
            <div class="task-actions">
                <button class="btn-edit">✏️ Sửa</button
                ><button class="btn-delete">🗑️ Xóa</button>
            </div>
        `;
        taskList.appendChild(showList);
    });
}