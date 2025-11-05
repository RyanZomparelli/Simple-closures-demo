import "./style.css";
import setCounter from "./counter";

const incrementBtn = document.querySelector(".button__increment");
const decrementBtn = document.querySelector(".button__decrement");
const resetBtn = document.querySelector(".button__reset");

const myCounter = setCounter();

incrementBtn.addEventListener("click", () => myCounter.increment());
decrementBtn.addEventListener("click", () => myCounter.decrement());
resetBtn.addEventListener("click", () => myCounter.reset());
