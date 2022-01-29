import {headerLogin} from "../components/headers.js";
import {userNavigation} from "../components/user-navigation.js";

const header = document.querySelector('.header');
const headerRightSection = document.createElement('div');
headerRightSection.classList.add('header__right-section')

headerRightSection.innerHTML = headerLogin('avatar.png', 'Guess');
header.appendChild(headerRightSection);

userNavigation(header);
