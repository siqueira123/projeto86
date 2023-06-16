var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
fabric.image.fromURLS('imagenDeAniversario', function(img) {
    blockImageObject = img;

    blockimageObject.scaleToWidht(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.ser({
    top:0;
    left:0
    });
    canvas.add(blockImageObject);
    });
    
	
}

function playSound(){
	x.play();
}
