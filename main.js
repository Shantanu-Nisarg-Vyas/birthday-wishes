var canvas = new fabric.Canvas('canvas1');
var audio = document.getElementById("myAudio");

function new_image() {
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        block_object = Img;
        block_object.scaleToHeight(788);
        block_object.scaleToWidth(940);
        block_object.set({
            top:0,
            left:0
        });
        canvas.add(block_object);
    });
	
}

function playSound() {
	audio.play();
}
