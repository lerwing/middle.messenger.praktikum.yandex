import { Block } from 'core'
import * as style from '../../styles/form.module.scss'
import * as styleBtn from 'components/button/button.module.scss'

interface ProfileState {
  errors: {
    email: string
    login: string
    first_name: string
    second_name: string
    phone: string
    display_name: string
  }
  values: {
    email: string
    login: string
    first_name: string
    second_name: string
    phone: string
    display_name: string
  }
  disabled: {
    email: boolean
    login: boolean
    first_name: boolean
    second_name: boolean
    phone: boolean
    display_name: boolean
  }
}

export class Profile extends Block {
  protected getStateFromProps(): void {
    this.state = <ProfileState>{
      values: {
        email: 'vasya@yandex.ru',
        login: 'vasya',
        first_name: 'Вася',
        second_name: 'Пупкин',
        phone: '+7111111111',
        display_name: 'Вася',
      },
      errors: {
        email: '',
        login: '',
        first_name: '',
        second_name: '',
        phone: '',
        display_name: '',
      },
      disabled: {
        email: true,
        login: true,
        first_name: true,
        second_name: true,
        phone: true,
        display_name: true,
      },
    }
  }
  render(): string {
    const { errors, values, disabled } = <ProfileState>this.state
    //<button><img src="${require('../../../static/arrow.svg')}" alt="back"></button>
    return `
    <main class="main">
      <div class="${style.navBar}">
        {{{Button
          className = ""
          disabled="disabled"
          img = "${require('../../../static/arrow.svg')}"
          alt = "back"
        }}}
      </div>
      <div class="fullEmplyCentr">
        <div class="${style.formProfile}">
          <button class="${style.avatarBig}">
            <img src="${require('../../../static/img.svg')}" alt="img">
            <span class="${style.avatarBigText}">Поменять аватар</span>
          </button>
          <H1 class="${style.formTitleProfile}">${values.display_name}</H1>
          {{{ProfileField
            name="email" 
            title="Почта" 
            placeholder="${values.email}"
            invalidMsg="${errors.email}"
            disabled="${disabled.email}"
          }}}
          {{{ProfileField
            name="login" 
            title="Логин" 
            placeholder="${values.login}"
            invalidMsg="${errors.login}"
            disabled="${disabled.login}"
          }}}
          {{{ProfileField
            name="first_name" 
            title="Имя" 
            placeholder="${values.first_name}"
            invalidMsg="${errors.first_name}"
            disabled="${disabled.first_name}"
          }}}
          {{{ProfileField
            name="second_name" 
            title="Фамилия" 
            placeholder="${values.second_name}"
            invalidMsg="${errors.second_name}"
            disabled="${disabled.second_name}"
          }}}
          {{{ProfileField
            name="display_name" 
            title="Имя в чате" 
            placeholder="${values.display_name}"
            invalidMsg="${errors.display_name}"
            disabled="${disabled.display_name}"
          }}}
          {{{ProfileField
            name="phone" 
            title="Телефон" 
            placeholder="${values.phone}"
            invalidMsg="${errors.phone}"
            disabled="${disabled.phone}"
          }}}
          {{{Button
            className = "${styleBtn.buttonProfileBlue}"
            disabled="disabled"
            text = "Изменить пароль"
          }}}
          {{{Button
            className = "${styleBtn.buttonProfileRed}"
            disabled="disabled"
            text = "Выйти"
          }}}
        </div>
      </div>
    </main>
    `
  }
}
