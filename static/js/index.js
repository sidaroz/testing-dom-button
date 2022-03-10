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