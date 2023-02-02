/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado; //NO USAR "VAR"!!!!
	nombreIngresado=document.getElementById("txtIdNombre").value;
	alert(nombreIngresado);

}

//"let" nace y muere entre las llaves que se declaran