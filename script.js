const body = document.querySelector('body');

const container = document.createElement('div')

const h1 = document.createElement('h1');
h1.id = 'title'
h1.innerText = 'Churrascômetro';

body.appendChild(container);
container.appendChild(h1);

function createInput(id, texto) {
    const input = document.createElement('input');
    input.id = id;
    input.placeholder = texto;
    container.appendChild(input);
}

function createButton() {
    const button = document.createElement('button');
    button.id = 'butao';
    button.type = 'button'
    button.innerText = 'Calcular'
    container.appendChild(button);
}



function execut() {
    const catchButton = document.querySelector('#butao')
    catchButton.addEventListener('click', () => {
        const valueAdult = document.querySelector('#adult').value;

        const valueChildren = document.querySelector('#children').value;

        const valueTime = document.querySelector('#duration').value;

        if (valueTime <= 6) {
            const calcMeat = (valueAdult * 400) + (valueChildren * 200);

            const calcBeer = (valueAdult * 1200);

            const calcDrink = (valueAdult * 1000) + (valueChildren * 500);

            let carne = document.createElement('p')
            carne.innerText = calcMeat/1000 + ' Kg de carne';
            container.appendChild(carne)

            let bebida = document.createElement('p')
            bebida.innerText = calcBeer/300 + ' latas de cerveja';
            container.appendChild(bebida)

            let drink = document.createElement('p')
            drink.innerText = calcDrink/2000 + ' Garrafas de 2L de Bebida';
            container.appendChild(drink);

        }

        if (valueTime > 6) {
            const calcMeat = (valueAdult * 650) + (valueChildren * 325);

            const calcBeer = (valueAdult * 2000);

            const calcDrink = (valueAdult * 1500) + (valueChildren * 750);
        
            let carne = document.createElement('p')
            carne.innerText = calcMeat/1000 + ' Kg de carne';
            container.appendChild(carne)

            let bebida = document.createElement('p')
            bebida.innerText = calcBeer/400 + ' latas de cerveja';
            container.appendChild(bebida)

            let drink = document.createElement('p')
            drink.innerText = calcDrink/2000 + ' Garrafas de 2L de Bebida';
            container.appendChild(drink);
        }
    });
}

const footer = document.createElement('footer')
body.appendChild(footer);

const textFooter = document.createElement('p');
textFooter.innerText = '2022 Ⓒ Desenvolvido por Renan Henrique';

const pegarFooter = document.querySelector('footer');

pegarFooter.appendChild(textFooter);


function init() {
    createInput('adult', 'Adultos');
    createInput('children', 'Crianças');
    createInput('duration', 'Duração (h)');
    createButton();
    execut();
}

window.onload = init;