import { Block } from 'core';
import * as style from './chatCard.module.scss';
interface ChatCardProps {
  count: number;
  chatName: string;
  userMessage: string;
  message: string;
  dateMessage: string;
  chatActiv: boolean;
  onClick: () => void;
}
export class ChatCard extends Block {
  constructor({ onClick, ...props }: ChatCardProps) {
    super({
      ...props,
      events: {
        click: onClick,
      },
    });
  }
  render(): string {
    return `
    <button disabled type="button">
      <span class="${style.chatCard} {{#if chatActiv}}${style.Activ}{{/if}}">
        <div class="${style.avatar}"></div>
        <div class="${style.chatCardContent}">
          <span class="${style.chatCardContentName}">{{chatName}}</span>
          <span class="${style.chatCardContentLastMessege}">
            <span class="${style.chatCardContentYou}">{{userMessage}}</span>
            {{message}}
          </span>
        </div>
        <div class="${style.chatCardInfo}">
          <span class="${style.chatCardInfoDate}">{{dateMessage}}</span>
          {{#if count}}
          <div class="${style.chatCardInfoCount}">{{count}}</div>
          {{/if}}
        </div>
      </span>
    </button>
    `;
  }
}
