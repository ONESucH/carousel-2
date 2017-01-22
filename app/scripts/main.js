'use strict';

var allImageTrain = document.getElementsByClassName('all-images'),
    startTrain = Date.now();

function carousel(valueButton) {
    switch (valueButton) {
        case 'leftButton' :
            var timerLeftTrain = setInterval(function () {
                var timePassed = Date.now() - startTrain;

                allImageTrain.style.marginLeft = timePassed / 5 + 'px';

                if (timePassed > 2000) clearInterval(timerLeftTrain);

            }, 20);
            break;
        case 'rightButton' :
            var timerRightTrain = setInterval(function () {
                var timePassed = Date.now() - startTrain;

                allImageTrain.style.marginRight = timePassed / 5 + 'px';

                if (timePassed > 2000) clearInterval(timerRightTrain);

            }, 20);
            break;
    }
}