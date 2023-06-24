//puts all elements with class decorationFiller in a list
var decorationFiller = document.querySelectorAll(".decorationFiller");

//the size diverence it will accept for placing red or green squares
var maxAcceptedDiverence = 0.3;
var AcceptedDiverence = 0.5;
var minAcceptedDiverence = 0.4;

//the amount of backgrounds
var backgrounds = 1;

//reloads the page on resize to make sure the squares always have the correct color
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});

window.onload = function() {
//loops trough the list
for (var decorationFillers = 0; decorationFillers < decorationFiller.length; decorationFillers++){

    //the width and heigth of a decorationFiller
    var width = decorationFiller[decorationFillers].offsetWidth;
    var height = decorationFiller[decorationFillers].offsetHeight;
    
    //decides the color of a decorationFiller
    //extra tall
    if (maxAcceptedDiverence * height > width){
    decorationFiller[decorationFillers].style.background = "url(../baseStyle/baseImage/backgroundDecorationImages/extraTall" + (Math.floor(Math.random() * backgrounds + 1) + ".png)");
    decorationFiller[decorationFillers].style.backgroundRepeat="no-repeat";
    decorationFiller[decorationFillers].style.backgroundSize = "100%";
    }
    //tall
    else if (AcceptedDiverence * height > width && width > maxAcceptedDiverence * height){
    decorationFiller[decorationFillers].style.background = "url(../baseStyle/baseImage/backgroundDecorationImages/tall" + (Math.floor(Math.random() * backgrounds + 1) + ".png)");
    decorationFiller[decorationFillers].style.backgroundRepeat="no-repeat";
    decorationFiller[decorationFillers].style.backgroundSize = "100%";
    }
    //short
    else if (height > minAcceptedDiverence * width && width > height){
    decorationFiller[decorationFillers].style.background = "url(../baseStyle/baseImage/backgroundDecorationImages/short" + (Math.floor(Math.random() * backgrounds + 1) + ".png)");
    decorationFiller[decorationFillers].style.backgroundRepeat="no-repeat";
    decorationFiller[decorationFillers].style.backgroundSize = "100%";
    }
    //medium
    else if (height > AcceptedDiverence * width && width > AcceptedDiverence * height) {
    decorationFiller[decorationFillers].style.background = "url(../baseStyle/baseImage/backgroundDecorationImages/medium" + (Math.floor(Math.random() * backgrounds + 1) + ".png)");
    decorationFiller[decorationFillers].style.backgroundRepeat="no-repeat";
    decorationFiller[decorationFillers].style.backgroundSize = "100%";
    }
    else {

    }

}
};