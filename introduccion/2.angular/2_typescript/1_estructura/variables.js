var nombreSoft = "Angular";
function saludo(nombreSoft) {
    return "Hola, bienvenido al curso de  " + nombreSoft;
}
document.getElementById("impresion").innerHTML = saludo(nombreSoft);
