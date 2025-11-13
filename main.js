const toggleThemeBtn = document.getElementById('toggle-theme-btn');

document.addEventListener('DOMContentLoaded', () => {

    // apply theme throughout website
    function applyTheme(theme) {
        const lightModeTheme = document.querySelector('link[href="CSS/index-lightmode.css"]');

        if (theme === 'light') {
            // IF LIGHT MODE IS NOT USED YET, ADD IT INSIDE HEAD TAG
            if (!lightModeTheme) {
                const linkElement = document.createElement('link');
                linkElement.rel = 'stylesheet';
                linkElement.href = 'CSS/index-lightmode.css';
                document.head.appendChild(linkElement);         
            }
        } else {
            // IF LIGHT MODE IS  USED, REMOVE         
            if (lightModeTheme) {   
            lightModeTheme.remove();     
            }
        }
    }

    // SAVE THEME TO LOCAL STORAGE
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // DEFAULT
        applyTheme('dark');
    }


    // ONCE THEME BUTTON IS CLICKED, ADD THEME TO LOCALSTORAGE
    toggleThemeBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // SAVE NEW THEME TO LOCALSTORAGE
        localStorage.setItem('theme', newTheme);

        // APPLY
        applyTheme(newTheme);
    });
});


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
  