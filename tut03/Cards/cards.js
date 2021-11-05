const card_container = document.querySelector('#cards-container');

for(let i=0; i< CARDS.length; i++ ){
    const cardSrc = CARDS[i];
    const card = createCard(cardSrc);
    console.log(card);
    card_container.appendChild(card);
}


function createCard(src){
    const card = document.createElement('img');
    card.src = src
    return card;
}

console.log(CARDS);

