import { Block } from 'core';
import { validateForm } from 'utils/validateForm';
import * as style from './chat.module.scss';

interface ChatProps {
  selectChatName?: string;
  onSendMsg: () => void;
}

export class Chat extends Block {
  static componentName = 'Chat';
  constructor({ ...props }: ChatProps) {
    super({
      ...props,
      onSendMsg: () => {
        const inputMsgElem = this.element?.children[2].children[0] as HTMLInputElement;
        if (typeof inputMsgElem.value === 'string' && typeof inputMsgElem.name === 'string') {
          const errorMsg = validateForm({ type: inputMsgElem.name, value: inputMsgElem.value });
          if (!errorMsg) {
            console.log({ [inputMsgElem.name]: inputMsgElem.value });
            inputMsgElem.value = '';
          } else {
            console.log(errorMsg);
          }
        } else {
          console.log('Ошибка дочений элемент не найден');
        }
      },
    });
  }

  render(): string {
    return `
      {{#if selectChatName}}
      <div class="${style.chatWindow}">
        <header class="${style.chatHeader}">
          <div class="${style.chatAvatar}"></div>
          <span class="${style.chatName}">{{selectChatName}}</span>
          {{{Button
            className="${style.chatOptions}"
            img = "${require('../../../static/advance.svg')}"
            alt="advance"
          }}}
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
          {{{Button
            className="${style.chatSend}"
            img = "${require('../../../static/arrow.svg')}"
            onClick=onSendMsg
            alt="send"
          }}}
        </form>
      </div>
    {{else}}
      <div class="${style.notSelectChat}">Выберите чат чтобы отправить сообщение</div>
    {{/if}}
    `;
  }
}
