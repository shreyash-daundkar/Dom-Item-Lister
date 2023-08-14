// Selecting element

const addForm = document.querySelector('#addForm');
const item = document.querySelector('#item');
const itemsList = document.querySelector('#items');

// Add items functionality.

addForm.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    const listItem = addElement('li', itemsList, item.value, 'list-group-item');
    const editBtn = addElement('button', listItem, 'Edit', 'btn', 'btn-sm', 'float-right', 'btn-warning', 'ml-2', 'edit');
    const delBtn = addElement('button', listItem, 'X', 'btn', 'btn-danger',  'btn-sm', 'float-right', 'delete');
}

// managing items list operations.

itemsList.addEventListener('click', itemOperation);
function itemOperation(e) {
    if(e.target.classList.contains('delete')) deleteItem(e.target.parentElement);
}

// Delete items functinality

function deleteItem(element) {
    const isConfirmed = confirm('Are you sure you want to delete this item?');
    if(isConfirmed) element.remove();
}

// Utility functions

function addElement(element, parent, text,  ...classes) {
    const newElement = document.createElement(element);
    classes.forEach(c => newElement.classList.add(c));
    newElement.innerText = text;
    parent.append(newElement);
    return newElement;
}