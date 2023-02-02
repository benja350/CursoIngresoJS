/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

let importe;
let aumentado;
let resultado;

importe = parseInt(document.getElementById("txtIdSueldo").value);

aumentado = importe * 10 / 100;

resultado = importe + aumentado;

document.getElementById("txtIdResultado").value=resultado;

}
