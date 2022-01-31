function headerMain() {
    return `<label class="switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class="switch__slider round"></div>
            </label>
            <a href="/login">
                <button title="Sign in">Sign in</button>
            </a>
            <a href="/register">
                <button class="btn__border" title="Sign up">Sign up</button>
            </a>`
}

function headerLogin(avatar, userName) {
    if (!avatar) {
        avatar = 'default.png'
    }
    return `<label class="switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class="switch__slider round"></div>
            </label>
            <button class="user-avatar__btn" title="${userName}">
                <img src="../img/avatars/${avatar}" class="user-avatar__img" alt="${userName}">
            </button>`
}

export {
    headerMain,
    headerLogin,
}
