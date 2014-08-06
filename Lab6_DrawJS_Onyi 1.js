// Declare Some Variables
// Polygon vertex pts
var origX0 = 0,  origY0 = 0;
var origX1 = 0, origY1 = 0;
var origX2 = 0, origY2 = 0;
var x0 = origX0, y0 = origY0;
var x1 = origX1, y1 = origY1;
var x2 = origX2, y2 = origY2;
var mouseDrag = false;
// Drawing Area
var canvasWidth = 800;
var canvasHeight = 600;
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
/* function drawPolygon() {
	context.beginPath();
	context.lineWidth = 1;
	context.moveTo( x0, y0);
	context.lineTo (x1, y1);
	context.lineTo (x2, y2);
	context.lineTo (x0, y0);
	context.stroke();
	context.closePath();
} */

function drawLine(X0,X1,Y0,Y1){
	canvasClear();
	context.beginPath();
	context.lineWidth = 1;
	context.moveTo(X0, Y0);
	if(X1>X0 && Y1>Y0)
		context.lineTo (X1-X0, Y1-Y0);
	else if(X0>X1 && Y0>Y1)
		context.lineTo (X0-X1, Y0-Y1);
	else if(X0>X1 && Y1>Y0)
		context.lineTo (X0-X1, Y1-Y0);
	else if(X1>X0 && Y0>Y1)
		context.lineTo (X1-X0, Y0-Y1);
	context.stroke();
	context.closePath();
	
}
function DrawPolygon(X0, X1, Y0, Y1) { //drapolygon with custom value...
	canvasClear();
	context.beginPath();
	context.lineWidth = 1;
	context.moveTo(X0, Y0);
	if(X1>X0)
		context.lineTo (X1-X0, Y0);
	else
		context.lineTo (X0-X1, Y0);
		
	context.lineTo ((X1-X0)/2, Y2);
	context.lineTo (X0, Y0);
	context.stroke();
	context.closePath();
}

function drawTriangle(){
	
}

function drawCircle(){

}

// Make callback for mouse click.
// Declare event listener (onmousedown) and write the function all at once
canvas.onmousedown = function(e){
	mouseDrag = true;
	// get mouse X, Y position
	origX0 = e.clientX;
	origY0 = e.clientY;
	
	// write some code here to do something
}
canvas.onmouseup = function(e){
	mouseDrag = false;
	origX1 = e.clientX;
	origY1 = e.clientY;
	drawLine(origX0,origX1,origY0,origY1);
	//DrawPolygon(origX0,origY0,origX1,origY1);
}

canvas.onmousemove = function(e){
	if(mouseDrag){
		origX1 = e.clientX;
		origY1 = e.clientY;
		document.getElementById("xfield").value=e.clientX;
		document.getElementById("yfield").value=e.clientY;
		drawLine(origX0,origX1,origY0,origY1);
		//DrawPolygon(origX0,origY0,origX1,origY1);
	}
	
}

// Some Code to do immediately, prior to any events occurring
//canvasClear();  // clear drawing area so only background color
//drawPolygon();	// draw initial polygon
DrawPolygon(0, 50, 0, 50)
