const countersContainer = document.querySelectorAll(".counter");
// ADDING FUNCTION TO DIV
countersContainer.forEach((counterContainer) => {
  counterContainer.innerText = "0";
  // FUNCTION CALL
  incrementCounter();
  // FUNCTION DECLARE
  function incrementCounter() {
    let currentNum = +counterContainer.innerText;
    const dataCeil = counterContainer.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterContainer.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterContainer.innerText = dataCeil;
    }
  }
});