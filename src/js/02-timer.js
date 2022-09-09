import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  picker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let endDate = '';
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.startBtn.disabled = true;

function onDateSelect(selectedDate) {
  if (selectedDate < new Date()) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }
  refs.startBtn.disabled = false;
  endDate = selectedDate;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onDateSelect(selectedDates[0]);
  },
};

flatpickr(refs.picker, options);

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = endDate - currentTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      updateClockface({ days, hours, minutes, seconds });
    }, 1000);
  },
};

function convertMs(deltaTime) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(deltaTime / day));
  const hours = addLeadingZero(Math.floor((deltaTime % day) / hour));
  const minutes = addLeadingZero(
    Math.floor(((deltaTime % day) % hour) / minute)
  );
  const seconds = addLeadingZero(
    Math.floor((((deltaTime % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockface({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function onStartBtnClick() {
  timer.start();
}
