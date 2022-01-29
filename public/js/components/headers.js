// ALL ADD TO header__right-section

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

function headerSignIn() {
    return `<label class="switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class="switch__slider round"></div>
            </label>
            <a href="/register">
                <button class="btn__border" title="Sign up">Sign up</button>
            </a>`
}

function headerSignUp() {
    return `<label class="switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class="switch__slider round"></div>
            </label>
            <span class="right-section__txt--gray">Already have an account?</span>
            <a href="/login">
                <button class="btn__border" title="Sign in">Sign in</button>
            </a>`
}

function headerLogin(avatar, userName) {
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
    headerSignUp,
    headerSignIn,
    headerLogin,
}
