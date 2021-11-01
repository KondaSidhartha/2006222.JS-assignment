var x=20;
var y=10;
console.log("here x(=20), y(=10) are global variables, so used anywhere.");
function a(){
    console.log("=>Function a");
    var x=30;
    console.log("here x takes value  30  as it is  locally declared, so x as 30 used only inside function a.");
    console.log("sum of x and y= "+(x+y));
    b();
}
function b(){
    console.log("=>Function b");
    console.log("here x takes value "+x+" which is global variable");
    console.log("sum of x,y is "+(x+y));
}
a();