function toggleTheme() {
    const btn = document.getElementById('mode');
    var theme = document.getElementsByTagName('link')[0];
            if (theme.getAttribute('href') == './CSS/light.css') {
                theme.setAttribute('href', './CSS/dark.css');
                btn.textContent = 'Light';
            } else {
                theme.setAttribute('href', './CSS/light.css');
                btn.textContent = 'Dark';
            }
}
