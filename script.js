function convertToCelsius(temp) {
    const celsius = (temp - 32) * 5 / 9;
    const rCelsius = Math.round(celsius * 10) / 10;
    console.log(`${temp}°F es igual a ${rCelsius}°C`);}

function convertToFahrenheit(temp) {
    const fahrenheit = (temp * 9 / 5) + 32;
    const rFahrenheit = Math.round(fahrenheit * 10) / 10;
    console.log(`${temp}°C es igual a ${rFahrenheit}°F`);}

convertToCelsius(360);
convertToFahrenheit(90);