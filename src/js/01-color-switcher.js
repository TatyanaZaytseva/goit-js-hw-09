const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
let intervalID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick({ target }) {
  if (target.classList.contains('isActive')) {
    return;
  }
  target.classList.add('isActive');
  target.disabled = true;
  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  refs.startBtn.classList.remove('isActive');
  refs.startBtn.disabled = false;
  clearInterval(intervalID);
}
