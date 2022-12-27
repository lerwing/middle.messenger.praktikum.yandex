import { Block } from 'core';
import * as style from './chatContent.module.scss';

interface ChatContentProps {
  chatDate?: string;
  myMessage?: boolean;
  MessageText?: string;
  MessageTime?: string;
}
export class ChatContent extends Block {
  static componentName = 'ChatContent';
  constructor({ ...props }: ChatContentProps) {
    super({
      ...props,
    });
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
    `;
  }
}
