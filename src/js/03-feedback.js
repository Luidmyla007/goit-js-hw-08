import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};
const LOCALSTORAGE_KEY = "feedback-form-state";
const SummaryData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', evt => {
    SummaryData[evt.target.name] = evt.target.value;
    console.log(SummaryData);
})


function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onEmailInput(evt) {
    const userEmail = evt.target.value; 
    localStorage.setItem(LOCALSTORAGE_KEY, userEmail);
     const saveEmail = localStorage.getItem(LOCALSTORAGE_KEY);
    if (saveEmail) {
        refs.input.value = saveEmail;
    }
}


function onTextareaInput(evt) {
    const message = evt.target.value; 
    localStorage.setItem(LOCALSTORAGE_KEY, message);
    const savedMessage = localStorage.getItem (LOCALSTORAGE_KEY);
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}





