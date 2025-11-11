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