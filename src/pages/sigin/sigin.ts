import { Block } from 'core'
import * as stile from '../../components/button/button.module.scss'

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
        login: '',
        password: '',
      },
    }
  }
  render(): string {
    const { base, values, errors } = this.state
    return `
    <main class="mainCentr">
      <form class="formSigin">
        <h1 class="formTitleSigin">Вход</h1>
        
        {{{Button 
          disabled="${base.disabledBtn}"
          text="Войти"
          className="${stile.buttonSigin}"
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
