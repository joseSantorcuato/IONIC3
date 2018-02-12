
//Cambiar var por let
var fechas: number[] = [1917, 1929, 1945, 1969, 1973, 1990, 2001, 2007];

function efemerides(fechas){
  return "Años importantes en la historia  "+fechas;  }

document.getElementById("impresion").innerHTML = efemerides(fechas);

console.log(fechas[2]);
