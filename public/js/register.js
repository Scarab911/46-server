const formMessageDOM = document.querySelector('.form-messages');
const pFormMessageDOm = formMessageDOM.querySelector('.message');
const closeMessageDom = document.querySelector('.close');
const formDOM = document.querySelector('.form');

const usernameDOM = document.getElementById('username');
const emailDOM = document.getElementById('email');
const passDOM = document.getElementById('pass');
const repassDOM = document.getElementById('repass');
const submitDOM = document.querySelector('button');


function showMessage(state, msg) {
    const allowedStates = ['info', 'success', 'error'];
    if (allowedStates.includes(state)) {
        formMessageDOM.classList.add('show');
        formMessageDOM.dataset.state = state;
        pFormMessageDOm.innerText = msg;
    }
}

function closeMessage() {
    formMessageDOM.classList.remove('show');
}

closeMessageDom.addEventListener('click', closeMessage);

function submitFormInfo(e) {
    e.preventDefault();

    const minimumPasswordLength = 8;

    const username = usernameDOM.value;
    const email = emailDOM.value;
    const pass = passDOM.value;
    const repass = repassDOM.value;

    if (username === '') {
        return showMessage('error', '"Username" negali buti tuscias');
    }
    if (email === '') {
        return showMessage('error', '"Email" negali buti tuscias');
    }
    if (pass.length < minimumPasswordLength) {
        return showMessage('error', `"Password" negali buti trumpesnis nei ${minimumPasswordLength} simboliai`);
    }
    if (repass.length < minimumPasswordLength) {
        return showMessage('error', `"Repeat password" negali buti trumpesnis nei ${minimumPasswordLength} simboliai`);
    }
    if (pass !== repass) {
        return showMessage('error', 'Nesutampa "Password" ir "Repeat password"');
    }

    closeMessage();
}

submitDOM.addEventListener('click', submitFormInfo)