const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;
buttonStart.addEventListener('click', getBodyStylebg);
buttonStop.addEventListener('click', stopBidyStyleId);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// document.body.style.background = getRandomHexColor();

function getBodyStylebg() {
  //  buttonStart.disabled = false;
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
}
function stopBidyStyleId() {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}
