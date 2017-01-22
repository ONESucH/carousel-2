'use strict';

var allImageTrain = document.getElementsByClassName('all-images')[0],
    moveBlock = 400,
    widthBlockImage = allImageTrain.style.left = 0;

console.log(widthBlockImage);

function carousel(valueButton) {

    switch (valueButton) {
        case 'leftButton' :
            widthBlockImage += moveBlock;
            allImageTrain.style.left = widthBlockImage + 'px';
            console.log(widthBlockImage);
            break;
        case 'rightButton' :
            widthBlockImage -= moveBlock;
            allImageTrain.style.left = widthBlockImage + 'px';
            console.log(widthBlockImage);
            break;
    }
}