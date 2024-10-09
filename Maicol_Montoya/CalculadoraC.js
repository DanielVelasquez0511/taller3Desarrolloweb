function Calcula_Cientifica() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacion = document.getElementById("operacion").value;
    var tipo = document.getElementById("tipo_dato").value;
    var resultado = 0;
    
    if (operacion === "suma") {
        resultado = suma(num1, num2);
    }
    else if (operacion === "resta") {
        resultado = resta(num1, num2);
    } 
    else if (operacion === "multiplicacion") {
        resultado = multiplicacion(num1, num2);
    } 
    else if (operacion === "division") {
        resultado = division(num1, num2);
    } 
    else if (operacion === "potencia") {
        resultado = potencia(num1, num2);
    } 
    else if (operacion === "seno") {
        resultado = seno(num1, tipo);
    } 
    else if (operacion === "coseno") {
        resultado = coseno(num1, tipo);
    } 
    else if (operacion === "tangente") {
        resultado = tangente(num1, tipo);
    } 
    else if (operacion === "logaritmoNatural") {
        resultado = logaritmonatural(num1);
    } 
    else if (operacion === "logaritmoBase10") {
        resultado = logaritmobase10(num1);
    } 
    else if (operacion === "raizCuadrada") {
        resultado = raizcuadrada(num1);
    }

    document.getElementById("Resultado").textContent = resultado;
}


function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "No se puede dividir entre cero, coloque otro valor";
    }
}

function potencia(num1, num2) {
    return Math.pow(num1, num2);
}

function seno(num1, tipo) {
    if (tipo === "radianes") {
        return Math.sin(num1);
    } 
    else  (tipo === "grados")
    {
        return Math.sin(num1 * (Math.PI / 180));
    }
}

function coseno(num1, tipo) {
    if (tipo === "radianes") {
        return Math.cos(num1);
    } 
    else  (tipo === "grados") 
    {
        return Math.cos(num1 * (Math.PI / 180));
    }
}

function tangente(num1, tipo) {
    if (tipo === "radianes") {
        return Math.tan(num1);
    } 
    else  (tipo === "grados") 
    {
        return Math.tan(num1 * (Math.PI / 180));
    }
}

function logaritmonatural(num1) {
    return Math.log(num1);
}

function logaritmobase10(num1) {
    return Math.log10(num1);
}

function raizcuadrada(num1) {
    return Math.sqrt(num1);
}