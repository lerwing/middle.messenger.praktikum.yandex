import { Block } from 'core'
import * as stile from './input.module.scss'

interface InputProps {
  name: string
  type?: string
  onChange: () => void
  placeholder: string
  pageUse?: 'sigin' | 'registr' | 'profile' | 'chat'
  disabled?: boolean
  invalid?: boolean
}

export class Input extends Block {
  constructor({ onChange = () => {}, ...props }: InputProps) {
    super({
      ...props,
      inputClass: stile.input,
      ...(props.pageUse === 'profile' && {
        inputClass: stile.inputProfile,
      }),
      ...(props.pageUse === 'chat' && {
        inputClass: stile.inputMessage,
        ...(props.name === 'search' && {
          inputClass: stile.inputSearch,
        }),
      }),
      ...(props.invalid && {
        inputClass: stile.inputInvalid,
        ...(props.pageUse === 'profile' && {
          inputClass: stile.inputProfileInvalid,
        }),
      }),
      events: { input: onChange },
    })
  }

  render(): string {
    return `
    <input 
      class='{{inputClass}}' 
      name='{{name}}' 
      placeholder='{{placeholder}}' 
      type='{{#if type}}{{type}}{{else}}text{{/if}}' 
      {{#if disabled}}disabled{{/if}}/>
    `
  }
}
