//Se solicita a usuario que ingrese cinco números

var n1 = prompt("Ingrese un número:")
var n2 = prompt("Ingrese otro número:")
var n3 = prompt("Ingrese otro número:")
var n4 = prompt("Ingrese otro número:")
var n5 = prompt("Ingrese otro número:")

//Se realiza suma y se despliega

var summa = (parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)+parseInt(n5));
var prom = (summa/5);

//Se calcula promedio y se despliega

document.write(`

<div class="texto mt-10px">

    <p>
    La suma de los números ingresados es: ${summa}<br>
    El promedio de los números ingresados es: ${prom}
    </p>
    
</div>

`
)













