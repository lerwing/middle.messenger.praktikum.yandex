import { Block } from 'core'
import * as buttonClass from 'components/button/button.module.scss'
import * as stile from '../../styles/form.module.scss'

export class Sigin extends Block {
  protected getStateFromProps() {
    this.state = {
      base: {
        disabledBtn: 'disabled',
      },
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: 'w',
        password: '',
      },
    }
  }
  render(): string {
    const { base, values, errors } = this.state
    if (!errors.login && !errors.password) {
      base.disabledBtn = undefined
    }
    return `
    <main class="mainCentr">
      <form class="${stile.formSigin}">
        <h1 class="${stile.formTitleSigin}">Вход</h1>
        {{{InputConteiner
          name="login"
          title="Логин"
          placeholder="Логин"
          pageUse="sigin"
          invalidMsg="${errors.login}"
        }}}
        {{{InputConteiner
          name="password"
          type="password"
          title="Пароль"
          placeholder="Пароль"
          pageUse="sigin"
          invalidMsg="${errors.password}"
        }}}
        {{{Button 
          disabled="${base.disabledBtn}"
          text="Войти"
          className="${buttonClass.buttonSigin}"
        }}}
        <a class="link" href="">Нет аккаунта?</a>
      </form>
    </main>
    `
  }
}
// {{{> 'input/input'
//   name="login"
//   title="Логин"
//   placeholder="Логин"
// }}}
// {{{> 'input/input'
//   name="password"
//   title="Пароль"
//   placeholder="Пароль"
//   inputClass="inputInvalid"
//   valid=""
// }}}
// super()
//     this.setProps({
//       classBtn: 'buttonSigin',
//       valid: 'notDisplay',
//       inputClass: 'input',
//       invalidMsg: 'Неверный логин или пароль',
//       inputClassInForm: 'inputConteinerSigin',
//       inputTitleClass: 'inputTitle',
//       disabledBtn: () => {
//         if (0) {
//           return 'disabled'
//         } else {
//           return ''
//         }
//       },
//       onClick: () => {},
//     })
