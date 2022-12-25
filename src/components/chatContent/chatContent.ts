import { Block } from 'core'
import * as style from './chatContent.module.scss'

export class ChatContent extends Block {
  constructor({ onChange = () => {}, ...props }) {
    super({
      ...props,
    })
  }

  render(): string {
    return `
    {{#if chatDate}}
    <span class="${style.chatDate}">{{chatDate}}</span>
    {{/if}}
    {{#if myMessage}}
    <article class="${style.myMessage}">
      <p class="${style.myMessageText}">{{MessageText}}</p>
      <span class="${style.myMessageTime}">{{MessageTime}}</span>
    </article>
    {{else}}
    <article class="${style.hisMessage}">
      <p class="${style.hisMessageText}">{{MessageText}}</p>
      <span class="${style.hisMessageTime}">{{MessageTime}}</span>
    </article>
    {{/if}}
    `
  }
}
