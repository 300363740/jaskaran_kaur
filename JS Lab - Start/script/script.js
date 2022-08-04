function addValue(){
    // get the operands value
    var firstOperand=parseInt(document.querySelector('#input_a').value);
    var secondOperand=parseInt(document.querySelector('#input_b').value);
    var output=firstOperand+secondOperand;

    document.mycalculator.output.value = firstOperand + '+' + secondOperand + '=' + output;
}
C:\Users\jaska\Downloads\JS Lab - Start\JS Lab - Start\script\script.js

function mulValue(){
    var firstOperand=parseInt(document.querySelector('#input_a').value);
    var secondOperand=parseInt(document.querySelector('#input_b').value);
    var output=firstOperand*secondOperand;

    document.mycalculator.output.value = firstOperand + '*' + secondOperand + '=' + output;
}

function divValue(){
    var firstOperand=parseInt(document.querySelector('#input_a').value);
    var secondOperand=parseInt(document.querySelector('#input_b').value);
    var output=firstOperand/secondOperand;

    document.mycalculator.output.value = firstOperand + '/' + secondOperand + '=' + output;
}
