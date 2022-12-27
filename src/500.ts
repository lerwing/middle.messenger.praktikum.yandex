import { Block, renderDOM, registerComponent } from 'core';
import Page500 from 'pages/500';
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Page500());
});
