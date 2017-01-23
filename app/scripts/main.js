'use strict';

var allImageMove = document.getElementsByClassName('all-images')[0],
    searchAllImages = document.getElementsByTagName('img'),
    lengthAllImages = searchAllImages.length,
    moveBlock = 400,
    widthBlockImage = allImageMove.style.left = 0;

function carousel(valueButton) {
    var widthAllImages = moveBlock * lengthAllImages;

    switch (valueButton) {
        case 'leftButton' :
            widthBlockImage += moveBlock;
            allImageMove.style.left = widthBlockImage + 'px';
            break;
        case 'rightButton' :
            widthBlockImage -= moveBlock;
            allImageMove.style.left = widthBlockImage + 'px';
            break;
    }

    if (widthBlockImage > 0) {
        widthBlockImage = Number('-' + widthAllImages);
        console.log(widthBlockImage);
    }
    if (widthBlockImage < Number('-' + widthAllImages)) {
        widthBlockImage = 0;
        console.log(widthBlockImage);
    }
    console.log(widthBlockImage);
}