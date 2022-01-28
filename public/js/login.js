import {alertMessage} from "./utils.js";

const formWrapper = document.querySelector('.container__wrapper');
const formSubmit = formWrapper.querySelector('.btn');

formSubmit.addEventListener('click', async () => {
    const username = formWrapper.querySelector('input[name="username"]').value;
    const password = formWrapper.querySelector('input[name="password"]').value;

    if (!username && !password) {
        return alertMessage('Please enter your details', 'negative')
    }

    const res = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password})
    });

    if (res.status === 200) {
        window.location.href = '/app';
    } else {
        const {error} = await res.json();
        alertMessage(error, 'negative');
        formWrapper.querySelector('input[name="password"]').value = '';
    }
});
