const switchCheckbox = document.querySelector('#theme-switch-toggle');
switchCheckbox.addEventListener('change', onCheckboxSwitchClick);

function onCheckboxSwitchClick() {
    body.classList.toggle(Theme);
}