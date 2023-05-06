function deleteme(){
    document.getElementById("result").value = "";
}
function calculator(calc){
    document.getElementById("result").value += calc ;
}
function answer(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b ;
}