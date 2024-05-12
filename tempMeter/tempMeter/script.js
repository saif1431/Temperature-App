const arc = document.querySelector("svg path");
const temperature = document.querySelector("#temperature");




let temperatureValue = 100; 

temperature.textContent = temperatureValue;


const arc_length = arc.getTotalLength();
const value = (temperatureValue / 100) * arc_length;
arc.style.strokeDasharray = `${value} ${arc_length - value}`;