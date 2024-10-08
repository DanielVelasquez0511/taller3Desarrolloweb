function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

function seno(x, seno) {
  if (seno === "grados") {
    x = x * Math.PI / 180;
  }
  return Math.sin(x);
}

function coseno(x, cose) {
  if (cose === "grados") {
    x = x * Math.PI / 180;
  }
  return Math.cos(x);
}

function tangente(x, tange) {
  if (tange === "grados") {
    x = x * Math.PI / 180;
  }
  return Math.tan(x);
}

function logaritmoNatural(x) {
  return Math.log(x);
}

function logaritmoBase10(x) {
  return Math.log10(x);
}

function potencia(x, exponente) {
  return Math.pow(x, exponente);
}

function raizCuadrada(x) {
  return Math.sqrt(x);
}

function calculadora() {
  let operacion = document.getElementById("operacion").value;
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let unidad = document.getElementById("unidad").value;
  let resultado;
  
  switch (operacion) {
    case "suma":
      resultado = suma(valor1, valor2);
      break;

    case "resta":
      resultado = resta(valor1, valor2);
      break ;

    case "multiplicación":
      resultado = multiplicacion(valor1, valor2);
      break;

    case "división":
      resultado = division(valor1, valor2 );
      break;

    case "seno":
      resultado = seno(valor1, unidad);
      break;

    case "coseno":
      resultado = coseno(valor1, unidad);
      break;

    case "tangente":
      resultado = tangente(valor1, unidad);
      break;

    case "logaritmo natural":
      resultado = logaritmoNatural(valor1);
      break;

    case "logaritmo base 10":
      resultado = logaritmoBase10(valor1);
      break;

    case "potencia":
      resultado = potencia(valor1, valor2);
      break;

    case "raíz cuadrada":
      resultado = raizCuadrada(valor1);
      break;
      
    default:
      resultado = "Operación no válida";
    }
  document.getElementById("resultado").textContent = resultado;
}