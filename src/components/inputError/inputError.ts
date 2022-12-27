import { Block } from 'core';
import * as stile from './inputError.module.scss';

interface ErrorMsg {
  invalidMsg?: string;
  name: string;
}

export class InputError extends Block {
  static componentName = 'InputError';
  protected render(): string {
    return `
    <span class='${stile.inputErorr}' name="{{name}}">{{#if invalidMsg}}{{invalidMsg}}{{/if}}</span>
    `;
  }
}
