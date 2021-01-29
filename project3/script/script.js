function buildTable(){
    addLinetoHtml('pipariya','darshit');
    addLinetoHtml('patel', 'vivek');
    addLinetoHtml('patel', 'savan');

}
function addLinetoHtml(lastname, firstname){
    let tableBody = document.querySelector('#tableBody');
    let addrow = tableBody.insertRow();
    let firstnamecell = addrow.insertCell();
    firstnamecell.innerHTML = firstname;
    let lastnamecell = addrow.insertCell();
    lastnamecell.innerHTML = lastname;
}