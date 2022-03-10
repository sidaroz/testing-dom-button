const { konami } = require("../static/js/konami");
const helpers = require("../static/js/helpers");

jest.mock("../static/js/helpers")

describe('easter eggs', () => {
    test('a message is shown when Konami code is correctly entered', () => {
        document.documentElement.innerHTML = '<h1 id="heading">A Heading</h1>'

        const correctKonami = [
            'ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'A', 'B'
        ]

        correctKonami.forEach(k => konami( {key: k }))
        
        expect(helpers.updateHeading).toHaveBeenCalledWith('You cracked the code!');
    })
})