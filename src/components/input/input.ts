import { Block } from 'core';
import * as stile from './input.module.scss';

interface InputProps {
  name: string;
  type?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onInput?: () => void;
  placeholder: string;
  pageUse?: 'sigin' | 'registr' | 'profile' | 'chat';
  disabled?: boolean;
  invalid?: boolean;
  value?: string;
}

export class Input extends Block {
  static componentName = 'Input';
  constructor({ onInput, onFocus, onBlur, ...props }: InputProps) {
    super({
      events: {
        input: onInput,
        focus: onFocus,
        blur: onBlur,
      },
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
    });
  }

  render(): string {
    return `
    <input 
      class='{{inputClass}}' 
      name='{{name}}' 
      placeholder='{{placeholder}}' 
      type='{{#if type}}{{type}}{{else}}text{{/if}}' 
      {{#if value}} value={{value}}{{/if}}
      {{#if disabled}}disabled{{/if}}/>
    `;
  }
}
