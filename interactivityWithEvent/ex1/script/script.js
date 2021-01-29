var inputvalue , outputdiv;
function init(){
    inputvalue = document.querySelector('#inputField');
    outputdiv = document.querySelector('#theDiv');
}

function showInput(){
    outputdiv.innerHTML = inputvalue.value;
}