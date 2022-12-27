import { renderDOM, registerComponent } from 'core';
import Button from 'components/button';
import InputConteiner from 'components/inputConteiner';
import InputError from 'components/inputError';
import Input from 'components/input';
import Chats from 'pages/chats';
import ProfileField from 'components/profileField';
import Chat from 'components/chat';
import ChatCard from 'components/chatCard';
import ChatContent from 'components/chatContent';

import './styles/style.scss';

registerComponent(Button);
registerComponent(InputConteiner);
registerComponent(InputError);
registerComponent(Input);
registerComponent(ProfileField);
registerComponent(Chat);
registerComponent(ChatCard);
registerComponent(ChatContent);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Chats());
});
