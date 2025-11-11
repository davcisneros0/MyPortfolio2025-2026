const toggleThemeBtn = document.getElementById('toggle-theme-btn');

toggleThemeBtn.addEventListener('click', () => {

    const lightModeTheme = document.querySelector('link[href="CSS/index-lightmode.css"]');

    // check if CSS file is already loaded to prevent duplication
        if (!lightModeTheme) {
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = 'CSS/index-lightmode.css';
            document.head.appendChild(linkElement);
        } else {
            if (lightModeTheme) {
                lightModeTheme.remove();
            }
        }
})

//NAVIGATION BAR//
let mainMenu = document.querySelector('.mainMenu');
let closeMenu = document.querySelector('.closeMenu');
let openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = "-100%";
}
  