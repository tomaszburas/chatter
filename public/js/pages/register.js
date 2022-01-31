import {alertMsgNegative, alertMsgPositive} from "../components/alert.js";

const formWrapper = document.querySelector('.container__wrapper');
const formSubmit = formWrapper.querySelector('.btn');

formSubmit.addEventListener('click', async () => {
    const username = formWrapper.querySelector('input[name="username"]').value;
    const password = formWrapper.querySelector('input[name="password"]').value;
    const email = formWrapper.querySelector('input[name="email"]').value;

    if (!username && !password && !email) {
        return alertMsgNegative('Please enter your details');
    }

    const res = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password, email})
    });

    if (res.status === 200) {
        formWrapper.querySelector('input[name="username"]').value = '';
        formWrapper.querySelector('input[name="password"]').value = '';
        formWrapper.querySelector('input[name="email"]').value = '';

        alertMsgPositive('Thanks for registration')
        setTimeout(() => {
            window.location.href = '/login';
        }, 3000);
    } else {
        const {error} = await res.json();
        alertMsgNegative(error);
        formWrapper.querySelector('input[name="password"]').value = '';
    }
});
