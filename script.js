const display = document.getElementById('display');
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
