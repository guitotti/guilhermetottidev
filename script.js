const menuButton = document.getElementById('menu__button');

function switchMenu(event) {

    if (event.type === 'touchstart') event.preventDefault();

    const navMenu = document.getElementById('nav');
    navMenu.classList.toggle('active');

    const active = navMenu.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }

}

menuButton.addEventListener('click', switchMenu);
menuButton.addEventListener('touchstart', switchMenu);