function userNavigation(header) {
    const html = `<ul class="user-navigation__ul">
                    <li class="user-navigation__li">
                        <a href="/app/settings" class="user-navigation__a" title="Settings">
                            <i class='bx bxs-cog'></i>
                            <span class="user-navigation__txt">Settings</span>
                        </a>
                    </li>         
                    <li class="user-navigation__li">
                        <a href="/app/logout" class="user-navigation__a" title="Logout">
                             <i class='bx bx-x-circle'></i>
                             <span class="user-navigation__txt">Logout</span>
                        </a>
                    </li>                
                   </ul>`;

    const userBtn = document.querySelector('.user-avatar__btn');

    let toggle = 0;
    userBtn.addEventListener('click', () => {
        if (!toggle) {
            const navigationUser = document.createElement('div');
            navigationUser.classList.add('user-navigation__wrapper');
            navigationUser.innerHTML = html;
            header.appendChild(navigationUser);
            toggle++;
        } else {
            const navigationUser = document.querySelector('.user-navigation__wrapper')
            header.removeChild(navigationUser)
            toggle--;
        }
        })
}

export {
    userNavigation,
}
