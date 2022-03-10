const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('it has a title', () => {
            const head = document.querySelector('head')
            expect(head).toBeTruthy();
            expect(head.textContent).toContain('JS in the Browser');
        });
    })

    describe('body', () => {
        test('header exists', () => {
            expect(document.querySelector('header')).toBeTruthy();
        });
    
        test('it has a header title', () => {
            let header = document.querySelector('header');
            expect(header.textContent).toContain('JavaScript in the Browser');
        })

        test('it has a dark/light mode switch button', () => {
            let switchBtn = document.querySelector('#switch-mode');
            expect(switchBtn).toBeTruthy();
        })

        test('it has an add item button', () => {
            let addItemBtn = document.querySelector('#add-item');
            expect(addItemBtn).toBeTruthy();
            expect(addItemBtn.textContent).toContain('Add Item');
        })
    })
})
