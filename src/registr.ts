import { Block, renderDOM, registerComponent } from 'core';
import Button from 'components/button';
import InputConteiner from 'components/inputConteiner';
import './styles/style.scss';
import InputError from 'components/inputError';
import Input from 'components/input';
import Registr from 'pages/registr';

registerComponent(Button);
registerComponent(InputConteiner);
registerComponent(InputError);
registerComponent(Input);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Registr());
});
