//puts all elements with class decorationFiller in a list
var decorationFiller = document.querySelectorAll(".decorationFiller");

//the size diverence it will accept for placing red or green squares
var acceptedDiverence = 0.4;

//reloads the page on resize to make sure the squares always have the correct color
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});

//loops trough the list
for (var decorationFillers = 0; decorationFillers < decorationFiller.length; decorationFillers++){
    console.log("decorationFiller" + decorationFillers);

    //the width and heigth of a decorationFiller
    var width = decorationFiller[decorationFillers].offsetWidth;
    var height = decorationFiller[decorationFillers].offsetHeight;
    
    //decides the color of a decorationFiller
    //tall decorationFillers will become red
    //wide decorationFillers will become green
    //but decorationFillers that are too wide or tall will become green
    if (height > width && acceptedDiverence*height < width){
    decorationFiller[decorationFillers].style.background = "url(images/tall.png)";
    decorationFiller[decorationFillers].style.backgroundSize = "cover";
    }
    else if (height < width && height > acceptedDiverence*width){
    decorationFiller[decorationFillers].style.background = "url(images/wide.png)";
    decorationFiller[decorationFillers].style.backgroundSize = "cover";
    }
    else {
    decorationFiller[decorationFillers].style.backgroundColor = "blue";
    }

}