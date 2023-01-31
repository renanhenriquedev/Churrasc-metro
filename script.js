const body = document.querySelector('body');

const container = document.createElement('div')

const h1 = document.createElement('h1');
h1.id = 'title'
h1.innerText = 'Churrascômetro';

body.appendChild(container);
container.appendChild(h1);

function createInput(id) {
    const input = document.createElement('input');
    input.id = id;
    container.appendChild(input);
}

function init () {
    createInput('adult');
    createInput('children');
    createInput('duration');
}

window.onload = init;