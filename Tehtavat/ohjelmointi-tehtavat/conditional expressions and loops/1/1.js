function convertTemperature() {
  const celsius = parseFloat(prompt("Enter temperature in Celsius:"));
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  document.getElementById(
    "result"
  ).innerHTML = `Fahrenheit: ${fahrenheit.toFixed(
    2
  )} F<br>Kelvin: ${kelvin.toFixed(2)} K`;
}
