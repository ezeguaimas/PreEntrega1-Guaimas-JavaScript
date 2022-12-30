//CALCULADORA DE INTERES SIMPLE E INTERES COMPUESTO//

//interesCompuesto
function interesCompuesto(){
    for (let i = 0; i < periodos; i++) {
        gananciaMensual = ((ini + acumulado) * tasa)
        acumulado = acumulado + gananciaMensual;
        final = ini + acumulado;    
    }
    console.log("La ganancia es de " + (final - ini))
    console.log("El monto final es de " + final)
    alert("La ganancia es de " + (final - ini))
    alert("El monto final es de " + final)
}

//interesSimple
function interesSimple(){
    final = ini + (ini * (tasa * periodos))
    console.log("La ganancia es de " + (final - ini))
    console.log("El monto final es de " + final)
    alert("La ganancia es de " + (final - ini))
    alert("El monto final es de " + final)
}

do {
    alert("CALCULADORA DE INTERÉS SIMPLE E INTERÉS COMPUESTO")

    opcion = prompt("Ingrese 's' para calcular Interés Simple o 'c' para Interés Compuesto");

    if (opcion == "s" || opcion == "c" || opcion == "S" || opcion == "C") {
        ini = Number (prompt("Ingrese el monto inicial"));
        periodos = Number (prompt("Ingrese la cantidad de meses"));
        tasaAnual = Number (prompt("Ingrese la tasa anual"));
        tasa = (tasaAnual / 12) / 100
        acumulado = 0
        gananciaMensual = 0
        final = 0

        if (Number.isNaN(ini) || Number.isNaN(periodos) || Number.isNaN(tasaAnual)) {
            alert("Debe ingresar parámetros numéricos")

        } else {
            if (opcion == 's' || opcion == 'S') {
                interesSimple(ini, periodos, tasa)

            } else if (opcion == 'c' || opcion == 'C') {
                interesCompuesto(ini, periodos, tasa)
            }
        }    

    }else{
        alert("La opción ingresada es inválida")

    }

    repetir = prompt("Presione cualquier tecla para realizar un nuevo cálculo o ingrese 'n' para salir");
    
} while (repetir != "n" && repetir != "N") 
