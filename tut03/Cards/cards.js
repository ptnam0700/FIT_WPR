const card_container = document.querySelector('#cards-container');


    for(let i=0; i< CARDS.length; i++ ){
        const cardSrc = CARDS[i];
        const card = createCard(cardSrc);
        console.log(card);
        card_container.appendChild(card);
    }

function createCard(src){
    const card = document.createElement('img');
    card.addEventListener('click', onCardClick)
    card.src = src
    return card;
}


function onCardClick(event){
    const card = event.currentTarget;
    
    const activeCard = document.querySelector('.active');
    if(activeCard){
        activeCard.classList.remove('active');
    }
    card.classList.add('active');
}
