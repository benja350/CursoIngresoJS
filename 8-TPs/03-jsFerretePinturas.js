/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Benjamin Andres Aguilera Div X*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let resultConvertido;

    temperatura=parseInt(document.getElementById("txtIdTemperatura").value);

    resultConvertido=(temperatura-32)*5/9;
    alert("El resultado convertido es " + resultConvertido.toFixed(1));
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let resultConvertido;

    temperatura=parseInt(document.getElementById("txtIdTemperatura").value);

    resultConvertido=(temperatura*9/5)+32;
    alert("El resultado convertido es " + resultConvertido.toFixed(1));
}
