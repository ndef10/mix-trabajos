//Se declaran variables con valor cero

var num1 = 0;
var num2 = 0;

//Se solicita a usuario indicar primer número mayor que 0 mediante prompt

var num1 = prompt("Ingrese un número mayor que 0:", "");

//mediante while se valida que se cumpla con el requerimiento para continuar

while (num1 <= 0) {

    var num1 = prompt("Ingrese un número mayor que 0:", "");
}

//mediante while se valida que segundo número cumpla con los dos requerimientos para continuar

while (num2 <= 0 || num2 == num1){
    
    var num2 = prompt("Ingrese otro número mayor que 0 y distinto al primer número;", "");
        
}

//Se despliegan los resultados y los números proporcionados para mayor comodidad a la hora de verificar los resultados

document.write(`

<div class="texto">

    Usted proporcionó los números: ${num1} y ${num2}<br><br>
    El resultado de la suma es: ${(parseInt(num1) + parseInt(num2))}<br>
    El resultado de la resta es: ${(parseInt(num1) - parseInt(num2))}<br>
    El resultado de la multiplicación es: ${(parseInt(num1) * parseInt(num2))}<br>
    El resultado de la división es: ${(parseInt(num1) / parseInt(num2))}<br>
    El resultado del módulo es: ${(parseInt(num1) % parseInt(num2))}<br>

</div>
`)

