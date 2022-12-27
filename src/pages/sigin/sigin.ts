import { Block } from 'core';
import * as buttonClass from 'components/button/button.module.scss';
import * as stile from '../../styles/form.module.scss';
import { submitForm } from 'utils/submitForm';

export class Sigin extends Block {
  constructor() {
    super();
    this.setProps({
      onSubmit: () => submitForm(),
    });
  }
  protected getStateFromProps() {
    this.state = {
      base: {
        disabledBtn: '',
      },
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
    };
  }
  render(): string {
    const { base, errors } = this.state;
    return `
    <main class="mainCentr">
      <form class="${stile.formSigin}">
        <h1 class="${stile.formTitleSigin}">Вход</h1>
        {{{InputConteiner
          name="login"
          title="Логин"
          placeholder="Логин"
          pageUse="sigin"
          invalidMsg=""
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
          onClick=onSubmit
        }}}
        <a class="link" href="">Нет аккаунта?</a>
      </form>
    </main>
    `;
  }
}
