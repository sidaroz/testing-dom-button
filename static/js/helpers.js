let main;
let modeBtn;

function darkMode(){
    main = document.querySelector('main');
    modeBtn = document.getElementById('switch-mode');
    main.style.backgroundColor = 'var(--fp-dark-steel)';
    main.style.color = 'white';
    modeBtn.textContent = 'Switch to Light Mode'
}

function lightMode(){
    main = document.querySelector('main');
    modeBtn = document.getElementById('switch-mode');
    main.style.backgroundColor = 'white';
    main.style.color = 'var(--fp-dark-steel)';
    modeBtn.textContent = 'Switch to Dark Mode'
}

function deleteItem(e){
    const itemId = e.target.getAttribute('data-item-id');
    const li = document.getElementById(`item-${itemId}`);
    const itemName = li.textContent.slice(0, -1);
    li.remove();
    alert(`Deleting ${itemName}`)
}

function addItem(){
    const newLi = createLi('daal')
    document.getElementById('food-list').appendChild(newLi);
}

function createLi(item){
    const newLi = document.createElement('li');
    newLi.id = 'item-4';
    newLi.textContent = item;
    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('data-item-id', "4");
    deleteBtn.textContent = 'x';
    deleteBtn.onclick = deleteItem;
    newLi.appendChild(deleteBtn);
    return newLi
}

function updateHeading(msg){
    document.querySelector('#heading').textContent = msg;
}


module.exports = { deleteItem, addItem, createLi, darkMode, lightMode, updateHeading }
