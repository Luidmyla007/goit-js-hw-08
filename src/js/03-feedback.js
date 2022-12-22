import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

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
    localStorage.removeItem('feedback-message');
    localStorage.removeItem('feedback-email');
}

function onEmailInput(evt) {
    const userEmail = evt.target.value; 
    localStorage.setItem('feedback-email', userEmail);
}


function onTextareaInput(evt) {
    const message = evt.target.value; 
    localStorage.setItem('feedback-message', message);
}

function readyTextareaInput() {
    const savedMessage = localStorage.getItem ('feedback-message');
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
};
 
function readyEmailInput() { 
    const saveEmail = localStorage.getItem('feedback-email');
    if (saveEmail) {
        refs.input.value = saveEmail;
    }
};



