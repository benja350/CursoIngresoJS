/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Benjamin Andres Aguilera Div X*/
function Sumar () 
{
    let num1
    let num2
    let num3
    let resultado
    
    num1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    num2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = num1 + num2 + num3
    alert(resultado)
}
function Promedio () 
{
	let num1
    let num2
    let num3
    let resultado
    let promedio

    num1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    num2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = num1 + num2 + num3
    promedio = resultado / 3
    alert(promedio)
}
function PrecioFinal () 
{
    let num1
    let num2
    let num3
    let resultado
    let precioIva
    const IVA = 0.21
    
    num1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    num2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = num1 + num2 + num3
    precioIva = resultado * IVA + resultado
    alert(precioIva)
}