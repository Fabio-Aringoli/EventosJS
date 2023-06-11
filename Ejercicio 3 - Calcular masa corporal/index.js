const calcularBtn = document.getElementById("calcular") //llamamos al calcularBtn y lo guardamos en una constante
const pesoInput = document.getElementById("peso") //llamamos a pesoInput y lo guardamos en una constante
const alturaInput = document.getElementById("altura") //llamamos a alturaInput y lo guardamos en una constante
const resultadoInput = document.getElementById("resultado") //llamamos a resultadoInput y lo guardamos en una constante

calcularBtn.addEventListener("click", calcularIMC) //Al boton para calcular, le agregamos un escuchador de eventos tipo "click" junto con la funcion para calcular

function calcularIMC(){ //Creamos una funcion para calcular el peso de la persona
  const peso = pesoInput.value; //inicializamos una constante "peso", que va a como valor la constante pesoInput ya inicializada arriba
  const altura = alturaInput.value; //inicializamos otra constante llamada "altura" que tendra el valor de alturaInput, ya inicializada arriba 

  if (peso && altura) { //y le agregamos una condicional de la siguiente manera diciendo, SI peso Y altura (da true) que pase esto
    const imc = peso / (altura * altura) //se crea una constante llamada IMC que va a calcular, primero, (const altura multiplicado const altura) y luego el resultaado lo va a dividir por su const peso
    resultadoInput.value = imc.toFixed(2) //Ademas a la constante resultadoInput, se le agrega un .value y se inicializa con la constante imc, agregandole un .toFixed(2) para redondear un numero decimal a un maximo de 2 decimales y devuelve una cadena de texto que representa el numero redondeado
  } else { //si la condicion peso && altura no se cumple
    resultadoInput.value = "" //deja el resultadoInput vacio, ya que no se le agrego un valor, poniendo resultadoInput.value = "", diciendo que el valor sea un string vacio
  }
}