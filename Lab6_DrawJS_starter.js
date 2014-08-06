// Declare Some Variables
// Polygon vertex pts
var origX0 = 0,  origY0 = 0;
var origX1 = 50, origY1 = 0;
var origX2 = 25, origY2 = 50;
var x0 = origX0, y0 = origY0;
var x1 = origX1, y1 = origY1;
var x2 = origX2, y2 = origY2;
// Drawing Area
var canvasWidth = 800;
var canvasHeight = 300;
var canvasBkGndColor = "#EEEEEE"; // Red-Green-Blue color in hex RRGGBB, 00=Black, FF=White
 
// Get Drawing object from html
var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext('2d');

// To Clear the Canvas of any drawing
function canvasClear(){
    context.fillStyle = canvasBkGndColor;
	context.rect(0,0,canvasWidth,canvasHeight);   // Make a drawing area, and call it context
    context.fill();  // clear drawing area so only background color
}

// To draw a polygon based on the values of vertex pts
function drawPolygon() {
	context.beginPath();
	context.lineWidth = 1;
	context.moveTo( x0, y0);
	context.lineTo (x1, y1);
	context.lineTo (x2, y2);
	context.lineTo (x0, y0);
	context.stroke();
	context.closePath();
}

// Make callback for mouse click.
// Declare event listener (onmousedown) and write the function all at once
canvas.onmousedown = function(e){
	// get mouse X, Y position
	var mX = e.clientX;
	var mY = e.clientY;
	
	// write some code here to do something
}

// Some Code to do immediately, prior to any events occurring
canvasClear();  // clear drawing area so only background color
drawPolygon();	// draw initial polygon

