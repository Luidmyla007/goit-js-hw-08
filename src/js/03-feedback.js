import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};
const LOCALSTORAGE_KEY = "feedback-form-state";
let summaryData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

pageUpdate();

function onInput(event) {
    summaryData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(summaryData));
}

function pageUpdate() {
    const savedText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)); 
    if (savedText) {
       for (const [key, value] of Object.entries(savedText)) {
           refs.form[key].value = value;
           summaryData[key] = value;
        }
   }
      
 }

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.dir(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
}





