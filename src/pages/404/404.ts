import { Block } from 'core';

export class Page404 extends Block {
  protected render(): string {
    return `
    <main class="mainCentr">
      <div class="error">
        <h1 class="errorNumber">404</h1>
        <h2 class="errorMessage">Не туда попали</h2>
        <a class="link" href="">Назад к чатам</a>
      </div>
    </main>
    `;
  }
}
