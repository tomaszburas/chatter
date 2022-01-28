function alertMessage(string, importance) {
    const top = document.querySelector('body');
    const div = document.createElement('div');
    div.classList.add('alert');

    const txt = document.createElement('p');

    if (importance === 'negative') {
        txt.classList.add('alert-text-negative', 'animate__animated', 'animate__fadeInDown');
        txt.innerText = `📣 ${string}`;
    }
    if (importance === 'positive') {
        txt.classList.add('alert-text-positive', 'animate__animated', 'animate__fadeInDown');
        txt.innerText = `🎉 ${string}`;
    }

    div.appendChild(txt);
    top.appendChild(div);

    setTimeout(() => {
        txt.classList.add('animate__fadeOutUp');
    }, 2000);

    setTimeout(() => {
        top.removeChild(div);
    }, 3000);
}

export { alertMessage };
