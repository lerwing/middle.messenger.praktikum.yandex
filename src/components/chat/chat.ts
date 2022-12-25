import { Block } from 'core'
import * as style from './chat.module.scss'

export class Chat extends Block {
  constructor({ onChange = () => {}, ...props }) {
    super({
      ...props,
    })
  }

  render(): string {
    return `
      {{#if selectChatName}}
      <div class="${style.chatWindow}">
        <header class="${style.chatHeader}">
          <div class="${style.chatAvatar}"></div>
          <span class="${style.chatName}">{{selectChatName}}</span>
          <button class="${style.chatOptions}">
            <img src="${require('../../../static/advance.svg')}" alt="options">
          </button>
        </header>
        <section class="${style.chatContent}">
          {{{ChatContent
            chatDate="08.12"
            myMessage=true
            MessageText="Привет, зацени какой част собрал за неделю."
            MessageTime="19.57"
          }}}
          {{{ChatContent
            chatDate=undefined
            myMessage=false
            MessageText="Прикольно, это твой курс на яндексе? И как в целом курс?"
            MessageTime="19.58"
          }}}
          {{{ChatContent
            chatDate=undefined
            myMessage=true
            MessageText="На самом деле курс очень жесткий, мне пришлось работать над проектом каждый день по 12 часов, чтобы успеть к сроку. Это мне еще повезло что я пока безработный, но скоро выходить на работу и я не знаю как все успеть."
            MessageTime="20.01"
          }}}
          {{{ChatContent
            chatDate=undefined
            myMessage=false
            MessageText="Блин, сочувствую. Но надеюсь ты справишься. И удачи на ревью ;)"
            MessageTime="20.03"
          }}}
          {{{ChatContent
            chatDate=undefined
            myMessage=true
            MessageText="К черту :)))))"
            MessageTime="20.04"
          }}}
        </section>
        <form class="${style.chatFooter}">
          {{{Input
            pageUse="chat"
            name="message"
            placeholder="Сообщение"
          }}}
          <button class="${style.chatSend}">
            <img src="${require('../../../static/arrow.svg')}" alt="send">
          </button>
        </form>
      </div>
    {{else}}
      <div class="${style.notSelectChat}">Выберите чат чтобы отправить сообщение</div>
    {{/if}}
    `
  }
}
