const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const CURRENT_THEME = 'theme';
const switchCheckbox = document.querySelector('#theme-switch-toggle');
switchCheckbox.addEventListener('change', onCheckboxSwitchClick);
const bodyItemClassList = document.querySelector('body').classList;

function onLoad() {
  const themeFromLs = localStorage.getItem(CURRENT_THEME);
  if (themeFromLs === Theme.DARK) {
    updateTheme(Theme.DARK);
    updateLSTheme(Theme.DARK);
    switchCheckbox.checked = true;
    return;
  } else {
    updateTheme(Theme.LIGHT);
    updateLSTheme(Theme.LIGHT);
    return;
  }
}
onLoad();
function onCheckboxSwitchClick(e) {
  if (e.target.checked) {
    updateTheme(Theme.DARK, Theme.LIGHT);
    updateLSTheme(Theme.DARK);
    return;
  }

  updateTheme(Theme.LIGHT, Theme.DARK);
  updateLSTheme(Theme.LIGHT);
}
function updateTheme(add, remove) {
  bodyItemClassList.add(add);
  bodyItemClassList.remove(remove);
}
function updateLSTheme(theme) {
  localStorage.setItem(CURRENT_THEME, theme);
}
