/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

