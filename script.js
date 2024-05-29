var a = 0;
var b = 0;
var result=0;


function addition(){
    a = parseInt(document.getElementById('inputA').value);
    b = parseInt(document.getElementById('inputB').value);

    result=a+b;
    document.getElementById('result').innerHTML = "Addition of two numbers: ";
    document.getElementById('num').innerHTML = result;
}

function subtraction(){
    a = parseInt(document.getElementById('inputA').value);
    b = parseInt(document.getElementById('inputB').value);

    result=a-b;
    document.getElementById('result').innerHTML = "Subtraction of two numbers: ";
    document.getElementById('num').innerHTML = result;

}

function multiplication(){
    a = parseInt(document.getElementById('inputA').value);
    b = parseInt(document.getElementById('inputB').value);

    result=a*b;
    document.getElementById('result').innerHTML = "Multiplication of two numbers: ";
    document.getElementById('num').innerHTML = result;

}

function division(){
    a = parseInt(document.getElementById('inputA').value);
    b = parseInt(document.getElementById('inputB').value);

    result=a/b;
    document.getElementById('result').innerHTML = "Division od two numbers: ";
    document.getElementById('num').innerHTML = result;

}