//Definimos las constantes que seran el elemento del HTML
const calcularBtn = document.getElementById("calcular")
const cantidadInput = document.getElementById("cantidad")
const monedaOrigenSelect = document.getElementById("monedaOrigen")
const monedaDestinoSelect = document.getElementById("monedaDestino")
const resultadoInput = document.getElementById("resultado")

//Definimos los factores de conversión para cada moneda dentro de una constante nueva que sera un objeto
const factoresConversion = {
  usd: 140, // 1 dólar = 140 pesos (ejemplo)
  eur: 120, // 1 euro = 120 pesos (ejemplo)
  gbp: 160, // 1 libra esterlina = 160 pesos (ejemplo)
  ars: 1, // 1 peso = 1 peso (ejemplo)
}

//Agregamos un escuchador de eventos que tome como tipo "click" y contenga una funcion que calcule la conversion
calcularBtn.addEventListener("click", calcularConversion)

//Definimos la funcion que haga el calculo
function calcularConversion() {
  //Definimos las constantes dentro del a funcion
  //Un parseFloat() para convertir el valor del campo del elemento "cantidad" a un número decimal antes de realizar los cálculos. 
  const cantidad = parseFloat(cantidadInput.value)
  //constante para tener el valor de la moneda de origen y otra para la moneda destino
  const monedaOrigen = monedaOrigenSelect.value
  const monedaDestino = monedaDestinoSelect.value
  //Declaramos una condicional utilizando isNaN(cantidad) para asegurarse de que el valor ingresado en el campo de cantidad sea un número válido.
  if (!isNaN(cantidad) && monedaOrigen && monedaDestino) {
    //Constantes 
    const factorOrigen = factoresConversion[monedaOrigen]
    const factorDestino = factoresConversion[monedaDestino]

    if (factorOrigen && factorDestino) {
      const resultado = cantidad * (factorDestino / factorOrigen)
      resultadoInput.value = resultado.toFixed(2)
    } else {
      resultadoInput.value = "Error en los factores de conversión"
    }
  } else {
    resultadoInput.value = "Por favor, complete todos los campos con valores numéricos"
  }
}