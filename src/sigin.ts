import { Block, renderDOM, registerComponent } from 'core';
import Sigin from 'pages/sigin';
import Button from 'components/button';
import InputConteiner from 'components/inputConteiner';
import './styles/style.scss';
import InputError from 'components/inputError';
import Input from 'components/input';

registerComponent(Button);
registerComponent(InputConteiner);
registerComponent(InputError);
registerComponent(Input);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Sigin());
});
