const cardContainer = document.querySelector('#flashcard-container');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

//Task1: flip card
function flipCard(event){  
    console.log(event.currentTarget)
    const flashcard = event.currentTarget;
    const word = flashcard.querySelector('.word');
    const definition = flashcard.querySelector('.definition');

    word.classList.toggle('hidden')
    definition.classList.toggle('hidden')
}

//Task 2: populate card
function createCard(word, definition){
    const card = document.createElement('div');
    card.classList.add('flashcard-box'); 
    card.classList.add('hidden');
    card.innerHTML = `
    <div class="flashcard word">${word}</div>
    <div class="flashcard definition hidden">${definition}</div>
    `
    return card;
}

function populateCards(){
    const cards = []
    for(word in WORDS){
        console.log(`${word} : ${WORDS[word]}`);
        const card = createCard(word, WORDS[word])
        cardContainer.appendChild(card);
        cards.push(card);
        card.addEventListener('click', flipCard)
    }
    return cards;
}
const cards = populateCards();

//Task 3: mouse click change cards
//on start : show first card
let currentIndex = 0;
setIndex(currentIndex);

function setIndex(index){
    if(index <0 || index > cards.length-1){
        return;
    }

    //remove last index
    cards[currentIndex].classList.add('hidden');

    currentIndex = index

    //show at index
    cards[index].classList.remove('hidden');
    
    

    prevBtn.disabled = currentIndex == 0;
    nextBtn.disabled = currentIndex == cards.length - 1;

    
}

function prevCard() {
    setIndex(currentIndex-1);
    console.log(currentIndex)
}

function nextCard() {
    setIndex(currentIndex+1);
    console.log(currentIndex)
}

prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);

//Task 4: keyboard function

function onKeyDown(event){
    const key = event.key;
    console.log(key);

    if(key === 'ArrowLeft'){
        prevCard();
    }
    if(key === 'ArrowRight'){
        nextCard();
    }
}

document.addEventListener('keydown', onKeyDown)
