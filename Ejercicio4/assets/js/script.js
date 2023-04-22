//Se solicita al usuario indicar cantidad de días que se van  a calcular

var dias = prompt("Ingrese cantidad de días para cálculo en años: ");


//Se declara constante anios y semana con su respectivo valor

const ANIOS = 365;

const SEMANA = 7;

//Si dias ingresados son menos de 365 se despliega mensaje indicando que  no alcanza para realizar el cálculo

if (dias < ANIOS) {

    document.write(`<p>${dias} dias no alcanzan a sumar un año</p>`);
    
}

//Si dias ingresados son 365 se despliega mensaje indicando que corresponden a un año exacto

if (dias == ANIOS) {
    document.write(`<p>${dias} son equivalentes a un año exacto</p>`);

}

//Si dias ingresados son más de 365 se calcula a cuantos años, semanas y días equivalen y se despliega información

if (dias > ANIOS) {

    var resAnio = Math.floor(parseInt(dias)/ (ANIOS));
    var provSemana = (parseInt(dias)% parseInt(ANIOS));
    var resSemana = Math.floor(parseInt(provSemana)/parseInt(SEMANA));
    var resResto = parseInt(provSemana)% parseInt(SEMANA);
     
    document.write(`
    
    <p>
    Usted ingresó: ${dias} días <br><br>  
    Equivalen a:<br> <br>
    ${resAnio}  años <br>
    ${resSemana} semanas  <br> 
    ${resResto} días
    </p>
    
    `
    );
    
}






