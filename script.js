//acciones y eventos de la calculadora.


//Esto agrega a la pantalla el valor del boton de la calculadora que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor;     //para seleccionar un elemento en HTML ponemos document.getElementByID
}                                                           

//Esta accion vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = '';         //lo igualamos a vacio entonces borra.
}                                                           //no recibe parametro 

//Esta accion toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;  
}