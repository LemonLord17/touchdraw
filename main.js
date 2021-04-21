var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;
    var new_width = screen.width - 150;
    var height = screen.height;
    var new_height = screen.height - 300;
     
if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
 document.body.style.overflow = "hidden";

}


    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
 last_position_of_x = e.touches[0].clentX - canvas.offsetLeft;
 last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    

    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
    canvas = document.getElementById("myCanvas");
 
ctx = canvas.getContext("2d");

var mouse_event = "empty";
var last_position_of_x, last_position_of_y 
color = "black"
width_of_line = 1
canvas.addEventListener("mousedown", my_mousedown);
color = "green";
function my_mousedown(e){
    mouse_event = "mouseDown";

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouse_event = "mouseUP";

}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouse_event = "mouseLeave";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){


current_postion_of_mouse_x = e.clientX-canvas.offsetLeft

current_postion_of_mouse_y = e.clientY-canvas.offsetTop
if(mouse_event=="mouseDown"){

    ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_postion_of_mouse_x,current_postion_of_mouse_y);
ctx.stroke();
ctx.strokeStyle=color;
	color = "green";
}
last_position_of_x=current_postion_of_mouse_x
last_position_of_y=current_postion_of_mouse_y

}
function clear()
    {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    
    }