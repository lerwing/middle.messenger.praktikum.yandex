import { Block } from 'core';
import * as stile from './inputError.module.scss';

interface ErrorMsg {
  invalidMsg?: string;
  name: string;
}

export class InputError extends Block {
  static componentName = 'InputError';
  constructor({ ...props }: ErrorMsg) {
    super({ ...props });
  }
  render(): string {
    return `
    <span class='${stile.inputErorr}' name="{{name}}">{{#if invalidMsg}}{{invalidMsg}}{{/if}}</span>
    `;
  }
}
