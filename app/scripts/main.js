'use strict';

var allImageTrain = document.getElementsByClassName('all-images');

function carousel(valueButton) {
    switch (valueButton) {
        case 'leftButton' :
            var startLeftTrain = Date.now(),
                timerLeftTrain = setInterval(function() {
                var timePassed = Date.now() - startLeftTrain;

                allImageTrain.style.left = timePassed / 5 + 'px';

                if (timePassed > 2000) clearInterval(timerLeftTrain);

            }, 20);
            break;
        case 'rightButton' :
            var startRightTrain = Date.now(),
                timerRightTrain = setInterval(function() {
                    var timePassed = Date.now() - startRightTrain;

                    allImageTrain.style.right = timePassed / 5 + 'px';

                    if (timePassed > 2000) clearInterval(timerRightTrain);

                }, 20);
            break;
    }
}