const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const btnCor = document.getElementById("cor");
let cor = "#eeff00";
btnCor.value = cor;

//desenhar (200,200)
function desenhar (pX, pY) {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.strokeStyle = cor; 
    ctx.arc(pX, pY, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

canvas.addEventListener("mousedown", click);
function  click(e) {
    //console.log(e);
    cor = btnCor.value
    desenhar(e.offsetX, e.offsetY);
}