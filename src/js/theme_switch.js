const switchCheckbox = document.querySelector('#theme-switch-toggle');
switchCheckbox.addEventListener('change', onCheckboxSwitchClick);
const bodyItem = document.querySelector('body');

function onCheckboxSwitchClick() {
   if ((!bodyItem.classList.contains('light-theme'))
       && (!bodyItem.classList.contains('dark-theme')))
        {bodyItem.classList.add('dark-theme');
        return;
    }   
             
    bodyItem.classList.toggle('light-theme');
    bodyItem.classList.toggle('dark-theme');
}