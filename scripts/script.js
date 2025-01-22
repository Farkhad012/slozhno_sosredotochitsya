const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const dayThemeButton = document.querySelector('button.day-theme');
const neonThemeButton = document.querySelector('button.neon-theme');
const systemThemeButton = document.querySelector('button.system-theme');
const setThemeButtons = document.querySelectorAll('button.header__theme-button')
const html = document.querySelector('html');
const recText = document.querySelector('.rec-text')
let theme;

function setActive() {
  setThemeButtons.forEach((button) => {
    button.classList.forEach((className) => {
      if (className.includes('active')) {
        button.classList.remove('active')
      }

      if (className.includes(theme)) {
        button.classList.add('active')
      }
    })
  });
}

function setDayTheme() {
  theme = 'day';
  html.setAttribute('data-theme-style', theme);
  setActive();
  recText.style.visibility = 'hidden';
}

function setNeonTheme() {
  theme = 'neon';
  html.setAttribute('data-theme-style', theme);
  setActive();
  recText.style.visibility = 'visible';
}

function setSystemTheme() {
  theme = isDarkMode ? 'neon' : 'day';

  html.setAttribute('data-theme-style', theme)
  setActive(theme = 'system')
  recText.style.visibility = isDarkMode? 'visible' : 'hidden';
}

dayThemeButton.addEventListener('click', setDayTheme);
neonThemeButton.addEventListener('click', setNeonTheme);
systemThemeButton.addEventListener('click', setSystemTheme);
