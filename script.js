function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function press(element) {
  const maxX = window.innerWidth - element.offsetWidth;
  const maxY = window.innerHeight - element.offsetHeight;
  element.style.left = getRandomInt(maxX) + "px";
  element.style.top = getRandomInt(maxY) + "px";
}

function yes() {
  const b1 = document.querySelector(".btn_1");
  const b2 = document.querySelector(".btn_2");
  b1.style.display = "none";
  b2.style.display = "none";
  document.body.style.backgroundImage = 'url("img/2.png")';
}
