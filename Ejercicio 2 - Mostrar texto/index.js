const cuadrado = document.getElementById("cuadrado"); //Llamamos al cuadrado y lo agregamos a una variable
const inputTexto = document.getElementById("inputTexto");//Llamamos al input de texto y lo agregamos a una variable
const botonBorrar = document.getElementById("botonBorrar");//Llamamos al boton para borrar y lo agregamos a una variable

inputTexto.addEventListener("input", actualizarCuadrado); //le agregamos un escuchador de eventos tipo "input" y la funcion para actualizar el cuadrado con el texto que se le esribe al input de tipo texto
botonBorrar.addEventListener("click", borrarContenido); //Agregamos un escuchador de eventos tipo "click" y la funcion borrar contenido para que borre todo el texto escrito dentro del cuadrado

function actualizarCuadrado(){ //Creamos la funcion para actualizar al cuadrado
  const texto = inputTexto.value; //Agregamos una constante texto donde guardamos la constante inputTexto.value, que esto nos muestra el valor de lo que se escribe dentro de la constante inputTexto, ya creada arriba.
  cuadrado.textContent = texto; //y a la constante cuadrado, tambien ya creada arriba, le damos el valor de la constante texto
}

function borrarContenido(){ //Creamos la funcion para borrar todo el contenido escrito
  inputTexto.value = ""; //a la constante inputTexto, agregandole el .value (valor de lo que se escribe) la inicializamos como un string vacio, ya que esto haria que al borrar, no se muestre nada
  cuadrado.textContent = ""; //y hacemos lo mismo con la constante cuadrado, agregandole un text.Content = "" inicializandola con un string vacio para que no haya nada escrito
}