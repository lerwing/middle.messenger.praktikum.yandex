import { Block } from 'core'
import * as style from '../../styles/form.module.scss'
import * as styleBtn from 'components/button/button.module.scss'

interface RegistrState {
  base: { disabledBtn?: string }
  errors: {
    email: string
    login: string
    first_name: string
    second_name: string
    phone: string
    password: string
    passwordConfirm: string
  }
  values: {
    email: string
    login: string
    first_name: string
    second_name: string
    phone: string
    password: string
    passwordConfirm: string
  }
}

export class Registr extends Block {
  protected getStateFromProps(): void {
    this.state = <RegistrState>{
      base: {
        disabledBtn: 'disabled',
      },
      values: {
        email: '',
        login: '',
        first_name: '',
        second_name: '',
        phone: '',
        password: '',
        passwordConfirm: '',
      },
      errors: {
        email: '',
        login: '',
        first_name: '',
        second_name: '',
        phone: '',
        password: '',
        passwordConfirm: '',
      },
    }
  }
  render(): string {
    const { base, errors } = <RegistrState>this.state
    return `
    <main class="mainCentr">
      <form class="${style.formRegistr}">
        <h1 class="${style.formTitleRegistr}">Регистрация</h1>
        {{{InputConteiner
          pageUse="registr"
          name="email" 
          type="email"
          title="Почта" 
          placeholder="email" 
          invalidMsg="${errors.email}"
        }}}
        {{{InputConteiner
          pageUse="registr"
          name="login" 
          title="Логин" 
          placeholder="Логин" 
          invalidMsg="${errors.login}"
        }}}
        {{{InputConteiner
          pageUse="registr"
          name="first_name" 
          title="Имя" 
          placeholder="Имя" 
          invalidMsg="${errors.first_name}"
        }}}
        {{{InputConteiner
          pageUse="registr"
          name="second_name" 
          title="Фамилия" 
          placeholder="Фамилия" 
          invalidMsg="${errors.second_name}"
        }}}
        {{{InputConteiner
          pageUse="registr"
          name="phone"
          type="tel"
          title="Телефон" 
          placeholder="+7 (ХХХ) ХХХ ХХ ХХ" 
          invalidMsg="${errors.phone}"
        }}}
        {{{InputConteiner
          pageUse="registr"
          type="password"
          name="password" 
          title="Пароль" 
          placeholder="Пароль"  
          valid="" 
          invalidMsg="${errors.password}"
        }}}
        {{{InputConteiner
          pageUse="registr"
          type="password"
          name="password_confirm" 
          title="Пароль (еще раз)" 
          placeholder="Пароль"  
          valid="" 
          invalidMsg="${errors.passwordConfirm}"
        }}}
        {{{Button 
          disabled="${base.disabledBtn}"
          text="Зарегистрироваться"
          className="${styleBtn.buttonRegistr}"
        }}}
        <a class="link" href="sigin.hbs">Войти</a>
      </form>
    </main>
    `
  }
}
