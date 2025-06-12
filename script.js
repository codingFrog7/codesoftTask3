const display = document.getElementById('display');
const click= addEventListener()
console.log(click);
function addtodp(input) {
   display.value += input;
   
}
function clrdp(){
    display.value ="";

}
function eql() {
    try {
        display.value =eval(display.value);
    }
    catch (Error) {
        display.value = "Error";
    }
   

}
