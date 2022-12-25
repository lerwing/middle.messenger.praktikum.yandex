import { Block, renderDOM, registerComponent } from 'core'
import Button from 'components/button'
import InputConteiner from 'components/inputConteiner'
import './styles/style.scss'
import InputError from 'components/inputError'
import Input from 'components/input'
import Profile from 'pages/profile'
import ProfileField from 'components/profileField'

registerComponent(Button)
registerComponent(InputConteiner)
registerComponent(InputError)
registerComponent(Input)
registerComponent(ProfileField)

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Profile())
})
