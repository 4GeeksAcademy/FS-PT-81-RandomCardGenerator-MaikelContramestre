/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  cartAlea();
  cardNew();
  inicioContador(10);
};

let paloUp = document.querySelector("#paloUp");
let paloDown = document.querySelector("#paloDown");
let number = document.querySelector("#number");
let timer = document.querySelector("#time");
let palos = ["♦", "♥", "♠", "♣"];
let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// ----------------------- numero random -----------------------------------

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//--------------------- carta aleatoria ------------------------------------
function cartAlea() {
  let numberEnd = random(numbers);
  let palosEnd = random(palos);

  if (palosEnd === "♦" || palosEnd === "♥") {
    number.classList.add("red");
    paloUp.classList.add("red");
    paloDown.classList.add("red");
  } else {
    number.classList.remove("red");
    paloUp.classList.remove("red");
    paloDown.classList.remove("red");
  }
  number.innerText = numberEnd;
  paloUp.innerText = palosEnd;
  paloDown.innerText = palosEnd;
}
//-----------------------Funcion de carta nueva con boton ------------------
function cardNew() {
  document.querySelector("#newCard").addEventListener("click", cartAlea);
}
//------------- conteo regresivo ------------------------------------------

function inicioContador(time) {
  function actualizacionContador() {
    let seconds = parseInt(time % 60, 10);
    timer.innerText = seconds;
    if (--time >= 0) {
      setTimeout(actualizacionContador, 1000);
    } else {
      cartAlea();
      inicioContador(10);
    }
  }
  actualizacionContador();
}
