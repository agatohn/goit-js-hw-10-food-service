import Handlebars from 'handlebars';
import menuData from '../menu.json';
import makeMenuMarkup from '../templates/menu_item.hbs';

const contentRef = document.querySelector('.js-menu');

contentRef.innerHTML = makeMenuMarkup(menuData, Handlebars);
