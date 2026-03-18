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
        id: newId,
        name: contactName.value,
        numberPhone: contactPhone.value,
        email: contactEmail.value
    }
    producs.push(producsList);
    alert(`Thêm liên hệ thành công!`)
}

function render() {
    producs.forEach(product => {
       let showList = document.createElement(`div`)
        showList.innerHTML = `
            <tr>
                <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.numberPhone}</td>
                    <td>${product.email}</td>
                    <td>
                    <div class="action-buttons">
                        <button class="btn-edit">Sửa</button>
                        <button class="btn-delete">Xóa</button>
                    </div>
                </td>
            </tr>`
        showListList.appendChild(showList);
    });
}

render();

