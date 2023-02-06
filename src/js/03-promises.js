import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.getElementsByName('delay');
const stepEl = document.getElementsByName('step');
const amountEl = document.getElementsByName('amount');
formEl.addEventListener('submit', getSubmitForm);

function getSubmitForm(e) {
  e.preventDefault();
  let delay = Number(delayEl[0].value);
  for (let position = 1; position <= amountEl[0].value; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += Number(stepEl[0].value);
  }
  formEl.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
