// Selecting element

const addForm = document.querySelector('#addForm');
const itemName = document.querySelector('#item-name');
const itemDes = document.querySelector('#item-des');
const itemsList = document.querySelector('#items');
const search = document.querySelector('#filter');



// Add items functionality.

addForm.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    const listItem = addElement('li', itemsList, document.createTextNode(itemName.value), 'list-group-item');
    const editBtn = addElement('button', listItem, document.createTextNode('Edit'), 'btn', 'btn-sm', 'float-right', 'btn-warning', 'ml-2', 'edit');
    const delBtn = addElement('button', listItem, document.createTextNode('X'), 'btn', 'btn-danger',  'btn-sm', 'float-right', 'delete');
    const des = addElement('small', listItem, document.createTextNode(itemDes.value), 'd-block', 'text-muted', 'mt-1');
    itemName.value = '';
    itemDes.value = '';
}



// Managing items list operations.

itemsList.addEventListener('click', itemOperation);
function itemOperation(e) {
    if(e.target.classList.contains('delete')) deleteItem(e.target.parentElement);
}



// Delete items functinality

function deleteItem(element) {
    const isConfirmed = confirm(`Are you sure you want to delete ${element.children[0].value}?`);
    if(isConfirmed) element.remove();
}



// Implmenting search functionality

search.addEventListener('keyup', findItem)
function findItem(e) {
    const val = e.target.value.toLowerCase();
    Array.from(itemsList.children).forEach(item => {
        if(val === item.firstChild.textContent.slice(0, val.length).toLowerCase()) item.classList.remove('d-none');
        else item.classList.add('d-none');
    })
}



// Utility functions

function addElement(element, parent, textNode,  ...classes) {
    const newElement = document.createElement(element);
    classes.forEach(c => newElement.classList.add(c));
    newElement.append(textNode);
    parent.append(newElement);
    return newElement;
}