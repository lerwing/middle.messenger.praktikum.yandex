import { Block } from 'core';
import * as styleBtn from 'components/button/button.module.scss';
import * as style from './profileField.module.scss';
import { submitForm } from 'utils/submitForm';

interface ProfileFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  nainvalidMsg?: string;
  disabled?: boolean;
}

export class ProfileField extends Block {
  constructor({ ...props }: ProfileFieldProps) {
    super({
      ...props,
      onClick: () => {
        this.setProps({
          disabled: false,
        });
        const inputEl: NodeListOf<HTMLInputElement> = document.getElementsByName(
          props.name
        ) as NodeListOf<HTMLInputElement>;
        inputEl[0].value = props.placeholder;
      },
      onSubmit: () => {
        const inputEl = this.element?.children[1].children[1] as HTMLInputElement;
        const inputErrorEl = this.element?.children[1].children[2] as HTMLElement;
        if (inputEl && inputErrorEl) {
          const submit = submitForm(inputEl, inputErrorEl);
          if (submit) {
            this.setProps({
              disabled: true,
              placeholder: inputEl.value,
            });
          }
        }
      },
    });
  }
  render(): string {
    return `
    <form class="${style.profileField}">
      <p class="${style.profileFieldName}">{{title}}</p>
      {{{InputConteiner
        pageUse="profile"
        name=name
        type=type
        placeholder=placeholder 
        invalidMsg=invalidMsg 
        disabled=disabled
      }}}
      {{#if disabled}}
      {{{Button
        className = "${styleBtn.buttonProfileField}"
        onClick=onClick
        img = "${require('../../../static/wing.png')}"
        alt = "edit"
      }}}
      {{else}}
      {{{Button
        className="${styleBtn.buttonProfileField}"
        img = "${require('../../../static/chek.svg')}"
        alt="send"
        onClick=onSubmit
      }}}
      {{/if}}
    </form>
    `;
  }
}
