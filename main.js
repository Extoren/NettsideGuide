const easy = document.getElementById("easy");
const greenBox = document.getElementById("green");

easy.addEventListener("mouseover", function() {
  greenBox.style.transition = "background-color 0.3s ease";
  greenBox.style.backgroundColor = "#1b5a38";
});

easy.addEventListener("mouseout", function() {
  greenBox.style.transition = "background-color 0.3s ease";
  greenBox.style.backgroundColor = "#262738";
});

const medium = document.getElementById("medium");
const blueBox = document.getElementById("blue");

medium.addEventListener("mouseover", function() {
  blueBox.style.transition = "background-color 0.3s ease";
  blueBox.style.backgroundColor = "#0e4b64";
});

medium.addEventListener("mouseout", function() {
  blueBox.style.transition = "background-color 0.3s ease";
  blueBox.style.backgroundColor = "#262738";
});

const hard = document.getElementById("hard");
const redBox = document.getElementById("red");

hard.addEventListener("mouseover", function() {
  redBox.style.transition = "background-color 0.3s ease";
  redBox.style.backgroundColor = "#5a1e0f";
});

hard.addEventListener("mouseout", function() {
  redBox.style.transition = "background-color 0.3s ease";
  redBox.style.backgroundColor = "#262738";
});




const easyButton = document.querySelector(".start");
easyButton.addEventListener("click", function() {
    const buttonId = this.id;
    const destinationURL = `Guids/easy/easy.html?id=${buttonId}`;
    window.location.href = destinationURL;
});

const mediumButton = document.querySelector(".start2");
mediumButton.addEventListener("click", function() {
    const buttonId = this.id;
    const destinationURL = `Guids/medium/medium.html?id=${buttonId}`;
    window.location.href = destinationURL;
});

const hardButton = document.querySelector(".start3");
hardButton.addEventListener("click", function() {
    const buttonId = this.id;
    const destinationURL = `Guids/hard/hard.html?id=${buttonId}`;
    window.location.href = destinationURL;
});