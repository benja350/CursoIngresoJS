/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Benjamin Andres Aguilera Div X*/

function Rectangulo () 
{
    let largo
    let ancho
    let resultado
    let alambre
    largo=parseFloat(document.getElementById("txtIdLargo").value)
    ancho=parseFloat(document.getElementById("txtIdAncho").value)

    resultado = (largo+ancho)*2
    alambre= resultado*3
    alert("Se necesitaran " + alambre + " metros de alambre para el terreno")
}
function Circulo () 
{
    let radio
    const PI = 3.14
    let resultado
    let alambre
    
    radio=parseFloat(document.getElementById("txtIdRadio").value)

    resultado= 2*PI*radio
    alambre=resultado*3

    alert("Se necesitaran " + alambre.toFixed(0) + " metros de alambre para el terreno")
}
function Materiales () 
{
    let largo
    let ancho
    let resultado
    let cal
    let cemento

    largo=parseFloat(document.getElementById("txtIdLargo").value)
    ancho=parseFloat(document.getElementById("txtIdAncho").value)

    resultado=largo+ancho
    cal=resultado*3
    cemento=resultado*2

    alert("Se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento")
}