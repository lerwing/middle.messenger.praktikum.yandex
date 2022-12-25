import { Block } from 'core'
import * as stile from './inputError.module.scss'

export class InputError extends Block {
  protected render(): string {
    return `
    <span class='${stile.inputErorr}'>{{#if invalidMsg}}{{invalidMsg}}{{/if}}</span>
    `
  }
}
