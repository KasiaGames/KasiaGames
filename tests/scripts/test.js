var decorationFiller = document.querySelectorAll(".decorationFiller");

for (var decorationFillers = 0; decorationFillers < decorationFiller.length; decorationFillers++){
    console.log("decorationFiller" + decorationFillers);

    var width = decorationFiller[decorationFillers].offsetWidth;
    var heigth = decorationFiller[decorationFillers].offsetHeight;
    if (heigth > width){
    decorationFiller[decorationFillers].style.backgroundColor = "red";
    }
    else {
    decorationFiller[decorationFillers].style.backgroundColor = "blue";
    }

}