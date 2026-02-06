let celsius = Number(prompt("Ingresa una temperatura en grados Celsius, recuerda solo ingresar datos numéricos:"));

let fahrenheit = (celsius*(9/5))+32;
let kelvin = celsius + 273;

console.log(`La temperatura de ${celsius}°C es igual a ${fahrenheit}°F y ${kelvin}°K.`);

