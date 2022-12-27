export function submitForm(inputEl?: HTMLInputElement, inputErrorEl?: HTMLElement) {
  let validForm: boolean = true
  let submitData: { [keyof: string]: string } = {}
  if (inputEl && inputErrorEl) {
    if (inputErrorEl.textContent) {
      validForm = false
      console.log('Form invalid')
      return false
    } else {
      submitData[inputEl.name] = inputEl.value
      console.log(submitData)
      return true
    }
  } else {
    const nodeListInputErrEl: NodeListOf<HTMLElement> = document.getElementsByName('InputError')
    nodeListInputErrEl.forEach((element) => {
      if (element.textContent) {
        validForm = false
        console.log('Form invalid')
      }
    })
    if (validForm) {
      const InputElCollection: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName('input')
      console.log(InputElCollection)
      for (let input of InputElCollection) {
        if (input.value) {
          submitData[input.name] = input.value
        } else {
          submitData = {}
          validForm = false
          break
        }
      }
      if (validForm) {
        console.log(submitData)
      }
    }
  }
}
