

// Album view
function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}

const albumView = document.querySelector('#album-view');
for(let i = 0; i < PHOTO_LIST.length; i++){
    const photoSrc = PHOTO_LIST[i];
    console.log(photoSrc)
    const image = createImage(photoSrc);
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
}

// Model view
const modalView = document.querySelector('#model-view')
modalView.addEventListener('click', onModalClick);

function onModalClick(){
    document.body.classList.remove('no-scroll')
    modalView.classList.add('hidden');
    modalView.innerHTML = "";
}

function onThumbnailClick(event){
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll')
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}