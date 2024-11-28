function addedClass(elementId, elementClass) {
    const element = document.getElementById(elementId);
    element.classList.add(elementClass);
}

function removeClass(elementId, elementClass) {
    const element = document.getElementById(elementId);
    element.classList.remove(elementClass);
}

// Generate random character;
function randomCharacter() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const characterSplit = characters.split('');
    const randomNumber = Math.round(Math.random() * 25);
    const screenValue = document.getElementById('screen-value');
    screenValue.innerText = characterSplit[randomNumber];
    addedClass(screenValue.innerText, 'bg-green-500')
}

// capture current key
function currentKey(event) {
    const screenValue = document.getElementById('screen-value');
    if (screenValue.innerText === event.key) {
        removeClass(screenValue.innerText, 'bg-green-500');
        removeClass(screenValue.innerText, 'bg-red-700');
        randomCharacter();
        let score = count('score-count');
        let scoreCount = score + 1;
        setValue('score-count', scoreCount);
    } else {
        addedClass(screenValue.innerText, 'bg-red-700');
        let life = count('life-count');
        let lifeCount = life - 1;
        setValue('life-count', lifeCount);
        if (lifeCount === 0) {
            removeClass('score', 'hidden');
            addedClass('playground', 'hidden');
            const score = document.getElementById('score-count').innerText;
            setValue('final-score', score);
        }
    }
}

// Game start
function play() {
    addedClass('home', 'hidden');
    removeClass('playground', 'hidden');
    randomCharacter();
}
function playAgain() {
    addedClass('score', 'hidden');
    removeClass('playground', 'hidden');
    const screenValue = document.getElementById('screen-value');

    removeClass(screenValue.innerText, 'bg-green-500');
    removeClass(screenValue.innerText, 'bg-red-700');
    addedClass(screenValue.innerText, 'bg-green-500');
    setValue('score-count', 0);
    setValue('life-count', 5);
}

// Life and score Count. Set value.
function setValue(elementId, elementValue) {
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}

function count(elementId, elementValue) {
    const element = document.getElementById(elementId);
    const elementText = parseInt(element.innerText);
    return elementText;
}

