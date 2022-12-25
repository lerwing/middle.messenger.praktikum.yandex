import { Block } from 'core'
import * as styleBtn from 'components/button/button.module.scss'
import * as style from './profileField.module.scss'

export class ProfileField extends Block {
  protected render(): string {
    return `
    <form class="${style.profileField}">
      <p class="${style.profileFieldName}">{{title}}</p>
      {{{InputConteiner
        pageUse="profile"
        name=name
        type=type
        placeholder=placeholder 
        invalidMsg=invalidMsg 
        disabled=disabled
      }}}
      {{#if disabled}}
      {{{Button
        className = "${styleBtn.buttonProfileField}"
        disabled="disabled"
        img = "${require('../../../static/wing.png')}"
        alt = "edit"
      }}}
      {{else}}
      <button class="${
        styleBtn.buttonProfileField
      }"><img src=${require('../../../static/chek.svg')} alt="send"></button>
      {{/if}}
    </form>
    `
  }
}
//../../../static/wing.svg
