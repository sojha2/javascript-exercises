const convertToCelsius = function(temperatureInFahrenheit) {
  let temperatureInCelcius;

  temperatureInCelcius = (temperatureInFahrenheit-32)*(5/9);
  temperatureInCelcius = parseFloat(temperatureInCelcius.toFixed(1));

  return temperatureInCelcius;
};

const convertToFahrenheit = function(temperatureInCelcius) {
  let temperatureInFahrenheit;

  temperatureInFahrenheit = temperatureInCelcius / (5/9) + 32;
  temperatureInFahrenheit = parseFloat(temperatureInFahrenheit.toFixed(1));
  return temperatureInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
