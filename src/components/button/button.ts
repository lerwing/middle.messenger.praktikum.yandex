import { Block } from 'core'
import template from 'bundle-text:./button.hbs'

interface ButtonProps {
  text: string
  onClick: () => void
  disabled: '' | 'disabled'
  className: string
}

export class Button extends Block {
  constructor({ text, onClick, disabled, className }: ButtonProps) {
    super({ text, className, disabled, events: { click: onClick } })
  }
  render(): string {
    return `
    <button class={{className}} {{disabled}}>
      {{text}}
    </button>
    `
  }
}
