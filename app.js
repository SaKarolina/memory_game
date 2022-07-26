const cardsArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/burger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'nuggets',
        img: 'images/nuggets.png',
    },
    {
        name: 'drumstick',
        img: 'images/drumstick.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/burger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'nuggets',
        img: 'images/nuggets.png',
    },
    {
        name: 'drumstick',
        img: 'images/drumstick.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/burger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'nuggets',
        img: 'images/nuggets.png',
    },
    {
        name: 'drumstick',
        img: 'images/drumstick.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/burger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'nuggets',
        img: 'images/nuggets.png',
    },
    {
        name: 'drumstick',
        img: 'images/drumstick.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
];

cardsArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDispaly = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard () {
    for (let i = 0; i < cardsArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank5.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
};
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank5.png')
        cards[optionTwoId].setAttribute('src', 'images/blank5.png')
        alert('You have clicked the same image!');
    }

    if (cardsChosen[0] === cardsChosen[1]) {
        // alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank5.png')
        cards[optionTwoId].setAttribute('src', 'images/blank5.png')
        // alert('Sorry try again!');
    }
    resultDispaly.textContent = cardsWon.length;

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardsArray.length/2) {
        resultDispaly.innerHTML = 'You win!';
    }
}

function flipCard () {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

const year = document.querySelector('#current-year');
year.innerHTML = new Date().getFullYear();