var Celsius  = 5;
var Fahrenheit = 12;

var CelsiusToFahrenheit = Celsius * 1.8 + 32;
var FahrenheitToCelsius = (Fahrenheit - 32) / 1.8;

const text1 = `Conversión: ${Celsius} Grados Celsius son ${CelsiusToFahrenheit.toFixed(1)} Grados Fahrenheit`;
console.log(text1);

const text2 = `Conversión: ${Fahrenheit} Grados Fahrenheit son ${FahrenheitToCelsius.toFixed(1)} Grados Celsius`;
console.log(text2);
