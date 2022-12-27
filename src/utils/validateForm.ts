interface ValidateRules {
  value: string
  type: string
}

export function validateForm(rules: ValidateRules) {
  let errorMsg = ''
  const { type, value } = rules
  if (type === 'login') {
    if (value.length === 0) {
      errorMsg = 'Поле не может быть пустым'
    } else if (value.length < 3) {
      errorMsg = 'Минимум 3 символа'
    } else if (value.length > 20) {
      errorMsg = 'Не более 20 символов'
    } else if (/^\d+$/.test(value)) {
      errorMsg = 'Не может состоять только из цифр'
    } else if (!/^.*[A-Za-zА-Яа-яёЁ]{1,}.*$/.test(value)) {
      errorMsg = 'Используйте русские или латинские буквы'
    } else if (!/^[A-Za-z0-9А-Яа-яёЁ_/-]+$/.test(value)) {
      errorMsg = 'Спец символы недопустимы'
    }
  } else if (type === 'password') {
    if (value.length === 0) {
      errorMsg = 'Поле не может быть пустым'
    } else if (value.length < 8) {
      errorMsg = 'Минимум 8 символов'
    } else if (value.length > 40) {
      errorMsg = 'Не более 40 символов'
    } else if (!/^.*[A-ZА-ЯЁ]{1,}.*$/.test(value)) {
      errorMsg = 'Пароль должен содержать заглавную букву'
    } else if (!/^.*[0-9]{1,}.*$/.test(value)) {
      errorMsg = 'Пароль должен содержать цифру'
    }
  } else if (type === 'password_confirm') {
    const nodeElm = document.getElementsByName('password')
    const passwordElement = nodeElm[0] as HTMLInputElement
    if (passwordElement.value) {
      if (passwordElement.value !== value) {
        errorMsg = 'Пароли не совпадают'
      }
    } else {
      errorMsg = 'Сначала введите пароль'
    }
  } else if (type === 'email') {
    if (value.length === 0) {
      errorMsg = 'Поле не может быть пустым'
    } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
      errorMsg = 'Некорректный адрес электронной почты'
    }
  } else if (type === 'phone') {
    if (value.length === 0) {
      errorMsg = 'Поле не может быть пустым'
    } else if (!/^([+]{0,1}[0-9]{10,15})?$/.test(value)) {
      errorMsg = 'Некорректный номер телефона'
    }
  } else if (type === 'first_name' || type === 'second_name') {
    if (value.length === 0) {
      errorMsg = 'Поле не может быть пустым'
    } else if (!/^[A-ZА-ЯЁ].*$/.test(value)) {
      errorMsg = 'Пожалуйста с большой буквы'
    } else if (!/^[A-Za-zА-Яа-яёЁ/-]+$/.test(value)) {
      errorMsg = 'Спец символы недопустимы'
    }
  } else if (type === 'display_name') {
    if (value.length === 0) {
      errorMsg = 'Поле не может быть пустым'
    } else if (!/^.*[\S]{1,}.*$/.test(value)) {
      errorMsg = 'Минимум 1 символ кроме пробела'
    }
  } else if (type === 'message') {
    if (value.length === 0) {
      errorMsg = 'Поле не может быть пустым'
    } else if (!/^.*[\S]{1,}.*$/.test(value)) {
      errorMsg = 'Минимум 1 символ кроме пробела'
    }
  }
  return errorMsg
}
