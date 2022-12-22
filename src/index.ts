import { Block, renderDOM, registerComponent } from 'core'
import sigin from 'pages/sigin'
import Button from 'components/button'
import './styles/style.scss'

registerComponent(Button)

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new sigin())
})
