import { Block, renderDOM, registerComponent } from 'core';
import Page404 from 'pages/404';
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Page404());
});
