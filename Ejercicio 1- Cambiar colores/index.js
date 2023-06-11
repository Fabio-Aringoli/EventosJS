const cuadrado = document.getElementById("cuadrado"); //llamamos al div "cuadrado"
const boton = document.getElementById("boton"); //llamamos al boton "cambiar"

boton.addEventListener("click", cambiarColor); //le agreamos un escuchador de eventos "click" seguido de una funcion

function cambiarColor() /* funcion que verifica el color del div "cuadrado" */ {
  if (cuadrado.classList.contains("celeste")) // le preguntamos SI contiene la clase "celeste" ya puesta en CSS
  {
    //si tiene la clase celeste, entonces
    cuadrado.classList.remove("celeste") //le removemos el color celeste ya definio en CSS con classList.remove("nombre de la clase")
    cuadrado.classList.add("rojo") //y le agregamos la clase rojo, tambien ya definida en CSS (que agrega el color rojo)
    cuadrado.textContent = "Rojo" //y le agregamos tambien un .textContent que va a cambiar el texto del contenedor
  } else { //pero si NO tiene la clase celeste, y esta parada sobre la clase rojo (DEFINIDA EN CSS)
    cuadrado.classList.remove("rojo") //le removemos la clase rojo con classList.remove("nombre de la clase")
    cuadrado.classList.add("celeste") //y nuevamente le agregamos la clase celeste con classList.add("nombre de la clase")
    cuadrado.textContent = "Celeste" // y finalmente le ponemos el .textContent que va a cambiar el texto del contenedor
  }
}