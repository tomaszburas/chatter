import {headerLogin, headerMain} from "../components/headers.js";
import {userNavigation} from "../components/user-navigation.js";

function initializeHeader() {
    window.addEventListener('load', async () => {
        const header = document.querySelector('.header');
        const headerRightSection = document.createElement('div');
        headerRightSection.classList.add('header__right-section')

        const res = await fetch('/check-authorization');
        const user = await res.json();

        if (user) {
            headerRightSection.innerHTML = headerLogin(user.avatar, user.username);
            header.appendChild(headerRightSection);
            userNavigation(header);
        } else {
            headerRightSection.innerHTML = headerMain();
            header.appendChild(headerRightSection);
        }
    });
}

export {
    initializeHeader,
}
