import { Block } from 'core'

export class Page500 extends Block {
  protected render(): string {
    return `
    <main class="mainCentr">
      <div class="error">
        <h1 class="errorNumber">500</h1>
        <h2 class="errorMessage">Мы уже фиксим</h2>
        <a class="link" href="">Назад к чатам</a>
      </div>
    </main>
    `
  }
}
