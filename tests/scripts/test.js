var contentRowBox = document.querySelectorAll(".contentRowBox");

var textBoxHalf = contentRowBox[0].querySelectorAll(".textBoxHalf");
var decorationFiller = textBoxHalf[0].querySelectorAll(".decorationFiller");

for (var contentRowBoxs = 0; contentRowBoxs < contentRowBox.length; contentRowBoxs++){
for (var textBoxHalfs = 0; textBoxHalfs < textBoxHalf.length; textBoxHalfs++){
for (var decorationFillers = 0; decorationFillers < decorationFiller.length; decorationFillers++){
    var width = decorationFiller[decorationFillers].offsetWidth;
    var heigth = decorationFiller[decorationFillers].offsetHeight;
    if (heigth > width){
        decorationFiller[decorationFillers].style.backgroundColor = "red";
    }
    else {
        decorationFiller[decorationFillers].style.backgroundColor = "blue";
    }
    
}
}
}
