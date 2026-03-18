let producs = [];
let newId = 1

let contactName = document.getElementById(`contact-name`);
let contactPhone = document.getElementById(`contact-phone`);
let contactEmail = document.getElementById(`contact-email`);
let addBtn = document.getElementById(`btn-add`);

let contactBody = document.getElementById(`contact-tbody`);

addBtn.addEventListener(`click`,function(e){
    e.preventDefault();
    create();
});

function create() {
    let producsList = {
        id: newId++,
        name: contactName.value,
        numberPhone: contactPhone.value,
        email: contactEmail.value
    }
    producs.push(producsList);
    contactName.value = ``;
    contactPhone.value = ``;
    contactEmail.value = ``;
    alert(`Thêm liên hệ thành công!`);
    render();
}

function render() {
    contactBody.innerHTML =``;
    producs.forEach(product => {
       let showList = document.createElement(`tr`)
        showList.innerHTML = `
                <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.numberPhone}</td>
                    <td>${product.email}</td>
                    <td>
                    <div class="action-buttons">
                        <button id="editBtn" class="btn-edit">Sửa</button>
                        <button id="deleteBtn" class="btn-delete">Xóa</button>
                    </div>
                </td>`
        
        contactBody.appendChild(showList);

        let deleteBtn = document.getElementById(`deleteBtn`);
        deleteBtn.addEventListener(`click`, (e) => {
            e.stopPropagation();
            deleteList(id, producs);      
        });
    });
}

function deleteList(id, producs) {
    producs = producs.filter(list => list.id !== id);
    render();
}


