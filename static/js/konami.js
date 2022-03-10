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