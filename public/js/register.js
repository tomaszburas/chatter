import {alertMessage} from "./utils.js";

const formWrapper = document.querySelector('.container__wrapper');
const formSubmit = formWrapper.querySelector('.btn');

formSubmit.addEventListener('click', async () => {
    const username = formWrapper.querySelector('input[name="username"]').value;
    const password = formWrapper.querySelector('input[name="password"]').value;
    const email = formWrapper.querySelector('input[name="email"]').value;

    const res = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password, email})
    });

    if (res.status === 200) {
        alertMessage('Thanks for registration', 'positive')
        setTimeout(() => {
            window.location.href = '/login';
        }, 3000);
    } else {
        const {error} = await res.json();
        alertMessage(error, 'negative')
        formWrapper.querySelector('input[name="password"]').value = '';
    }
});
