import { Block } from 'core';
import * as stile from './inputConteiner.module.scss';
import { validateForm } from 'utils/validateForm';
interface InputConteinerProps {
  name: string;
  type?: string;
  value?: string;
  onBlur: () => void;
  onInput: () => void;
  placeholder: string;
  pageUse?: 'sigin' | 'registr' | 'profile';
  disabled?: boolean;
  title?: string;
  invalidMsg?: string;
  invalid?: boolean;
}

export class InputConteiner extends Block {
  constructor({ ...props }: InputConteinerProps) {
    super({
      ...props,
      inputTitleClass: stile.inputTitle,
      inputClassDiv: stile.inputConteiner,
      ...(props.pageUse === 'sigin' && {
        inputClassDiv: stile.inputConteinerSigin,
      }),
      ...(props.pageUse === 'registr' && {
        inputClassDiv: stile.inputConteinerRegistr,
      }),
      ...(props.pageUse === 'profile' && {
        inputClassDiv: stile.inputConteinerProfile,
        inputTitleClass: 'notDisplay',
      }),
      ...(!!props.invalidMsg && {
        invalid: true,
      }),
      onBlur: (e: FocusEvent) => {
        validator(e.target as HTMLInputElement, props.name);
      },
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement;
        const invalidMsg = validateForm({ type: props.name, value: inputEl.value });
        setTimeout(() => {
          this.refs.refError.setProps({ invalidMsg: invalidMsg });
        }, 1000);
      },
    });
    const validator = (inputEl: HTMLInputElement, InputName: string) => {
      const invalidMsg = validateForm({ type: InputName, value: inputEl.value });
      this.setProps({ invalidMsg: invalidMsg });
      if (invalidMsg) {
        this.setProps({ invalid: true });
      } else {
        this.setProps({ invalid: false });
      }
      this.setProps({ value: inputEl.value });
    };
  }

  render(): string {
    return `
    <div class='{{inputClassDiv}}'>
      <span class={{inputTitleClass}}>{{title}}</span>
      {{{Input
        pageUse=pageUse
        name='{{name}}'
        placeholder='{{placeholder}}'
        type=type
        disabled=disabled
        invalid=invalid
        onInput=onInput
        onBlur=onBlur
        value=value
      }}}
        {{{InputError
          name="InputError"
          ref="refError"
          invalidMsg=invalidMsg
        }}}
    </div>
    `;
  }
}
