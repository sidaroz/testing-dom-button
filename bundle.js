(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
console.log('Hello, you found me!')
const helpers = require("./helpers");
const mode = require("./mode");
const { konami } = require("./konami")

let dark = true;

function initBindings(){
    let modeBtn = document.getElementById('switch-mode');
    let deleteBtns = document.querySelectorAll('.delete-btn');
    let addItemBtn = document.getElementById('add-item');

    modeBtn.addEventListener('click', () => {
        dark = mode.switchMode(dark)
    })
    
    deleteBtns.forEach(btn => { btn.addEventListener('click', helpers.deleteItem)});
    addItemBtn.addEventListener('click', helpers.addItem);
    document.addEventListener('keydown', konami)
}

initBindings();
helpers.darkMode();
},{"./helpers":1,"./konami":3,"./mode":4}],3:[function(require,module,exports){
const helpers = require("./helpers");

let inputHistory = [];
let konamiCode = [
    'ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'A', 'B'
];

function konami(e){
    if(e.key === konamiCode[inputHistory.length]){
        inputHistory.push(e.key);
        inputHistory.length === konamiCode.length && helpers.updateHeading('You cracked the code!');
    } else {
        inputHistory = [];
    }
}

module.exports = { konami }
},{"./helpers":1}],4:[function(require,module,exports){
const { lightMode, darkMode } = require("./helpers");

function switchMode(dark) {
    dark ? lightMode() : darkMode()
    return !dark
}

module.exports = { switchMode }
},{"./helpers":1}]},{},[2]);
