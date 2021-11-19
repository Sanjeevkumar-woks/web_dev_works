var display=document.getElementById("result");

// function to insert the number
function insert(num) 
{
display.value = display.value + num;
}

// function to return the result 
function equal()
{
var exp = display.value;
if(exp)
{
    display.value = eval(exp)
}
}

//function to remove the number at the end of the numeric series 
function backspace()
{
var exp = display.value;
display.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}
