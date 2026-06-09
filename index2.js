const display = document.getElementById("display");

function appendToDisplay(input){
    // If user clicks the bracket button, automatically alternate between ( and )
    if (input === '( )') {
        const openBrackets = (display.value.match(/\(/g) || []).length;
        const closeBrackets = (display.value.match(/\)/g) || []).length;
        
        // If there's an open bracket needed, or last char is a number, close it
        if (openBrackets > closeBrackets) {
            display.value += ")";
        } else {
            display.value += "(";
        }
    } else {
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        let expression = display.value;

        expression = expression.replace(/(\d)\(/g, '$1*(');
        expression = expression.replace(/\)(\d)/g, ')*$1');

        expression = expression.replace(/log\(/g, 'Math.log10(');

        display.value = eval(expression);
    }
    catch(error) {
        display.value = "Error";
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}