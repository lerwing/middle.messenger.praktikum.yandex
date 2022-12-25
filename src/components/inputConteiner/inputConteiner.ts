import { Block } from 'core'
import * as stile from './inputConteiner.module.scss'

interface InputConteinerProps {
  name: string
  type?: string
  onChange: () => void
  placeholder: string
  pageUse?: 'sigin' | 'registr' | 'profile'
  disabled?: boolean
  title?: string
  invalidMsg?: string
}

export class InputConteiner extends Block {
  constructor({ onChange = () => {}, ...props }: InputConteinerProps) {
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
      events: { input: onChange },
    })
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
      }}}
        {{{InputError
          invalidMsg=invalidMsg
        }}}
    </div>
    `
  }
}
