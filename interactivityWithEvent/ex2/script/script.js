let canvas, mousePos, mouseButten, ctx;

window.onload = () => {
    canvas = document.querySelector('#mycanvas');
    ctx = canvas.getContext("2d");
    canvas.addEventListener('mousemove', (evt) => {
        mousePos = getMousePos(canvas, evt);
        let message = 'Mouse position: ' + mousePos.x + ' ' + mousePos.y;
        console.log("X:" + mousePos.x + "Y:" + mousePos.y);
        writeMessage(message);
    }, false);
    canvas.addEventListener('mouseup', (evt) => {
        mousePos = getMousePos(canvas,evt);
        let message = 'Mouse Up at position: ' + mousePos.x + ' ' + mousePos.y;
        writeMessage(message);
    }, false);
    canvas.addEventListener('mousedown', (evt) => {
        mousePos = getMousePos(canvas, evt);
        let message = 'Mouse Down at position: ' + mousePos.x + ' ' + mousePos.y;
        writeMessage(message);
    }, false);
}
window.addEventListener('mousemove', (evt) => {
    canvas = document.querySelector('#mycanvas');
    ctx = canvas.getContext("2d");
    mousePos = getMousePos(canvas, evt);
    let message = 'Mouse position: ' + mousePos.x + ' ' + mousePos.y;
    console.log("X:" + mousePos.x + "Y:" + mousePos.y);
    writeMessage(message);
}, false);

function writeMessage(message) {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle ='black' ;
    ctx.font='12pt Arial';
    ctx.fillText(message,10,25)
    ctx.restore();

}

function getMousePos(canvas, evt) {
    // necessary to take into account CSS boudaries
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX ,
        y: evt.clientY 
    };
}