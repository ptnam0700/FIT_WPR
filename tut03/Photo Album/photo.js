function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}

const albumView = document.querySelector('#album-view');
for(let i = 0; i < PHOTO_LIST.length; i++){
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
}

function onThumbnailClick(event){
    const image = createImage(event.currentTarget.src);
    model
}