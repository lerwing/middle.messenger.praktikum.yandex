import { Block } from 'core'
import * as style from './chats.module.scss'
import * as styleBtn from 'components/button/button.module.scss'

export class Chats extends Block {
  protected getStateFromProps(): void {
    this.state = {}
  }
  render(): string {
    return `
    <main class="main">
      <nav class="${style.chatNav}">
        <head class="${style.chatNavHeader}">
          <div class="${style.chatNavHeaderBtn}">
            {{{Button
              className='${styleBtn.buttonCreate}'
              text='+Новый чат'
            }}}
            {{{Button
              className='${styleBtn.buttonProfile}'
              text='Профиль >'
            }}}
          </div>
          <div class="${style.chatNavHeaderSearch}">
            <img src="${require('../../../static/search.svg')}" alt="Search">
            {{{Input
              pageUse="chat"
              name="search"
              type="search"
              placeholder="Поиск"
            }}}
          </div>
        </head>
        <div class="${style.chatNavHeaderList}">
        {{{ChatCard
          count=10
          chatName="Имя чата"
          userMessage= ""
          message="Текст последнего сообщения"
          dateMessage="07.12"
          chatActiv=false
          selectChatName="Имя чата"
        }}}
        {{{ChatCard
          count=10
          chatName="Имя чата"
          userMessage= ""
          message="Текст последнего сообщения"
          dateMessage="07.12"
          chatActiv=false
          selectChatName="Имя чата"
        }}}
        {{{ChatCard
          count=10
          chatName="Имя чата"
          userMessage= ""
          message="Текст последнего сообщения"
          dateMessage="07.12"
          chatActiv=true
          selectChatName="Имя чата"
        }}}
        {{{ChatCard
          count=10
          chatName="Имя чата"
          userMessage= ""
          message="Текст последнего сообщения"
          dateMessage="07.12"
          chatActiv=false
          selectChatName="Имя чата"
        }}}
        </div>
      </nav>
      {{{Chat 
        selectChatName="Имя чата"
      }}}
    </main>
    `
  }
}
