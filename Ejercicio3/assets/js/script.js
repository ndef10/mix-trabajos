//Se solicita a usuario proporcionar temperatura

var celsius= prompt("Por favor, ingrese temperatura:,");

//Se declara como constante el equivalente a 0 grados celsius en grados Kelvin//

const KELVIN = 273.15;

//Se declara variable que recoge el resultado de la fórmula: 0 °C + 273.15 = 273.15 K, proporcionada en el desafío para calcular grados Kelvin

var resKelvin = (parseFloat(celsius)+ parseFloat(KELVIN)).toFixed(2);

//Se declara como constante el equivalente a 0 grados celcius en grados Fahrenheit

const FAHRENHEIT = 32;

//Se declara variable que recoge el resultado de la fórmula: (0 °C *9/5) + 32 = 32 °F, proporcionada en el desafío para calcular grados fahrenheit

var resFahrenheit = parseFloat(((celsius)* parseFloat(9/5))+ (FAHRENHEIT));

//////////////////////////////////////////////////////////////////////////////////////////////

//Se despliegan resultados//

document.write(`

<div class="texto">
    La temperatura en grados Celsius es: ${celsius}° C <br>
    La temperatura en grados Kelvin es: ${resKelvin}K <br>
    La temperatura en grados Fahrenheit es: ${resFahrenheit}° F <br>
</div>
`
)