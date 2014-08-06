// Declare Some Variables
// Polygon vertex pts
var x0 = 0, y0 = 0;
var x1 = 0, y1 = 0;
var x2 = 0, y2 = 0;
var  width = 0, height=0;
var mouseDrag = false;
var tool = 1;
var toolWidth = 1;
var color = "#000000";
var stroke = 1;
var fill = false;
// Drawing Area
var canvasWidth = 1000;
var canvasHeight = 600;
var canvasBkGndColor = "#EEEEEE"; // Red-Green-Blue color in hex RRGGBB, 00=Black, FF=White
 
 // Get Drawing object from html
var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext('2d');
var drawMethod = [];
//Initializing the paint background...
    context.fillStyle = canvasBkGndColor;
	context.rect(0,0,canvasWidth,canvasHeight);   // Make a drawing area, and call it context
	context.stroke();
    context.fill();  // clear drawing area so only background color
	context.strokeStyle = color;


// To Clear the Canvas of any drawing
function canvasClear(){
	 context.fillStyle = canvasBkGndColor;
	context.rect(0,0,canvasWidth,canvasHeight);   // Make a drawing area, and call it context
    context.fill();  // clear drawing area so only background color
}


function drawLine(X0,X1,Y0,Y1){
	context.beginPath();
	context.moveTo(X0, Y0);
	context.lineTo (X1, Y1);
	context.lineWidth = stroke;
	context.strokeStyle = color;
	if(tool==1){
		context.lineCap = 'round';
	}
	else if(tool==2){
		context.lineCap = 'square';
	}
	context.stroke();
	context.closePath();	
}

function drawRectangle(X0, Y0, Width, Height){ 
	context.beginPath();
	context.moveTo(X0, Y0);
	context.lineWidth = stroke;
	if(fill){
		context.fillRect(X0,Y0,Width,Height);
	}
	else{
	context.rect(X0,Y0,Width,Height);
	}
	context.stroke();
	context.closePath();	
}

function drawCircle(X0,Y0,Width, Height){
	context.beginPath();
	context.moveTo(X0+Math.sqrt(Width*Width+Height*Height), Y0);
	context.arc(X0, Y0, Math.sqrt(Width*Width+Height*Height), 0, 2*Math.PI)
	context.stroke();
	if(fill){
	context.fill();
	}
	context.closePath();	
} 

// Make callback for mouse click.
// Declare event listener (onmousedown) and write the function all at once
canvas.onmousedown = function(e){
	mouseDrag = true;
	// get mouse X, Y position
	x0 = e.clientX-canvas.offsetLeft;
	y0 = e.clientY-canvas.offsetTop;
	// write some code here to do something
/* 	if(tool=0){
		this.shape = drawLine(x0,x1,0,0);
	}
	else if(tool=2){
		this.shape = drawRectangle(x0,y0,0,0);
	} */
}
canvas.onmouseup = function(e){
	mouseDrag = false;
	if(document.getElementById("fill").checked){
		fill = true;
	}
	else{
		fill = false;
	}
	
	x1 = e.clientX-canvas.offsetLeft;
	y1 = e.clientY-canvas.offsetTop;
	if(tool==0){
		drawMethod.push(drawLine(x0,x1,y0,y1));
	}
	else if(tool==1){
		
	}
	else if(tool==2){
		if(y1>y0){
			if(x1>x0){
				drawMethod.push(drawRectangle(x0,y0,x1-x0,y1-y0));
				}
			else if(x0>x1){
				drawMethod.push(drawRectangle(x1,y0,x0-x1,y1-y0));
				}
		}
		else if(y0>y1){
			if(x1>x0){
				drawMethod.push(drawRectangle(x0,y1,x1-x0,y0-y1));
			}
			else if(x0>x1){
				drawMethod.push(drawRectangle(x1,y1,x0-x1,y0-y1));
			}
		} 
	}
	else if(tool==3){
		drawMethod.push(drawCircle(x0,y0,width, height));
	}
	else{
	
	}
	
}

canvas.onmousemove = function(e){
	x1 = e.clientX-canvas.offsetLeft;
	y1 = e.clientY-canvas.offsetTop;
	document.getElementById("xfield").value=x1;
	document.getElementById("yfield").value=y1;
	if(mouseDrag){
		if(tool==1){  //Pencil
			drawLine(x0,(e.clientX - canvas.offsetLeft),y0,(e.clientY-canvas.offsetTop));
				x0=x1;
				y0=y1;
		}
		else if(tool==2||tool==3){
			getWH(x0,y0,x1,y1);
		}
	}
	}
	
function getWH(x0,y0,x1,y1){
	if(y1>y0){
		document.getElementById("height").value=y1-y0;
		if(x1>x0){
			document.getElementById("width").value=x1-x0;
				}
		else if(x0>x1){
			document.getElementById("width").value=x0-x1;
				}
		}
	else if(y0>y1){
	document.getElementById("height").value=y0-y1;
		if(x1>x0){
			document.getElementById("width").value=x1-x0;
				}
		else if(x0>x1){
			document.getElementById("width").value=x0-x1;
				}
		} 
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
}
	
function setLine(){
	tool=0;
	document.getElementById("tool").value="Line";
}
function setPencil(){
	tool=1;
	document.getElementById("tool").value="Pencil";
}
function setRect(){
	tool=2;
	document.getElementById("tool").value="Rectangle";
}
function setCircle(){
	tool=3;
	document.getElementById("tool").value="Circle";
}
function setColor(){
	color = prompt("Enter the color code", color);
	if(color.length != 7 || color==""){
		color = "#000000";
	}
		context.fillStyle = color;
	
}
function setLinewidth(){
	stroke =  prompt("Enter the Line Width", stroke);
	if(stroke==null||stroke==""){
		stroke=1;
	}
}


// Some Code to do immediately, prior to any events occurring
//canvasClear();  // clear drawing area so only background color
//drawPolygon();	// draw initial polygon
