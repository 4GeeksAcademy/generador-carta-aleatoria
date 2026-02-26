import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
   const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const palos = ["♥", "♦", "♠", "♣"];   

function generarCarta() {
  const numeroRandom = numeros[Math.floor(Math.random() * numeros.length)];
  const paloRandom = palos[Math.floor(Math.random() * palos.length)];

  document.querySelector(".numero").textContent = numeroRandom;
  document.querySelectorAll(".palo").forEach(p => p.textContent = paloRandom);

  
  const color = (paloRandom === "♠" || paloRandom === "♣") ? "black" : "red";
  document.querySelectorAll(".palo").forEach(p => p.style.color = color);
}
generarCarta();


}