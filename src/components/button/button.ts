import { Block } from 'core';

interface ButtonProps {
  text?: string;
  img?: string;
  alt?: string;
  onClick: () => void;
  disabled: '' | 'disabled';
  className: string;
}

export class Button extends Block {
  static componentName = 'Button';
  constructor({ text, onClick, disabled, className, img, alt }: ButtonProps) {
    super({ text, img, alt, className, disabled, events: { click: onClick } });
  }
  render(): string {
    return `
      <button  class="{{className}}" {{disabled}} type="button">
        {{#if img}}
          <img  src="{{img}}" alt="{{alt}}">
        {{else}}
          {{text}}
        {{/if}}
      </button>
    `;
  }
}
