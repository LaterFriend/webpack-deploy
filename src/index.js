import generateJoke from "./generateJoke";
import "./styles/main.scss";
import wimpel from "./assets/wimpel.svg"

const obr = document.getElementById("obr");
obr.src = wimpel;

const button = document.getElementById("jokeBtn")
button.addEventListener("click",generateJoke)

generateJoke();