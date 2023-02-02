/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let num3;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value); 
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	num3 = num1 + num2

	alert("El resultado de la suma es " + num3);	
}

function restar()
{
	let num1;
	let num2;
	let num3;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value); 
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	num3 = num1 - num2

	alert("El resultado de la resta es " + num3);
}

function multiplicar()
{ 	
	let num1;
	let num2;
	let num3;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value); 
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	num3 = num1 * num2

	alert("El resultado de la multiplicacion es " + num3);
}

function dividir()
{
	let num1;
	let num2;
	let num3;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value); 
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	num3 = num1 / num2

	alert("El resultado de la division es " + num3);
}

