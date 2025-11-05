const countText = document.querySelector(".count");

function setCounter() {
  function setText() {
    countText.textContent = count;
  }

  let count = 0;

  function increment() {
    count++;
    setText();
  }
  function decrement() {
    count--;
    setText();
  }
  function reset() {
    count = 0;
    setText();
  }

  return {
    increment,
    decrement,
    reset,
  };
}

export default setCounter;
