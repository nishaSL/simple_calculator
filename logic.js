//display number

function number(num){
    var result = document.getElementById('input');
    result.value += num;
}

//get result

function result(){
    var result = document.getElementById('input');
    result.value = eval(result.value);
}

//clear input box 

function clearResult(){
    var result = document.getElementById('input');
   result.value = "";
}