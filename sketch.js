var drawing = [];
var currentPath = [];
var pointer,database;

function setup(){
 canvas = createCanvas(500, 500);
 canvas.mousePressed(startPath);
 canvas.parent('canvascontainer');

 var saveButton = select('#saveButton')
 saveButton.mousePressed(saveDrawing)
// canvas.mouseReleased(endPath)
 background(20);
 database = firebase.database;
}

function draw(){

}

function mouseDragged(){

	var pointer = {
		x: mouseX,
		y: mouseY
	}
	noStroke()
	fill(255, 0, 90);
	ellipse(mouseX, mouseY, 13, 13)
    currentPath.push(pointer)

}

function startPath(){
	currentPath = [];
	drawing.push(currentPath)
}

//function endPath(){}

function saveDrawing(){
	var ref = firebase.database().ref('drawings');
    var drawingData = {
    	name: "Anay",
        drawing: drawing
    }
	ref.push(drawingData);
}