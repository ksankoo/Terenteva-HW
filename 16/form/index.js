const myForm = document.forms.myForm;
const selectOccupation = myForm.elements.selectOccupation;
selectOccupation.selectedIndex = -1;

myForm.addEventListener('submit', makeSubmit);
let isNameValid = false;
let isEmailValid = false;
let isAgeValid = false;
let isSexValid = false;
let isOccupationValid = false;
let isPasswordValid = false;
let isPasswordSame = false;
let isCheckboxValid = false;

const checkValue = function (value, regexp) {
  return regexp.test(value);
};

const nameInput = myForm.elements.nameInput;
nameInput.addEventListener('input', function () {
  const reg = /^(([a-zA-Z' -]{2,22})|([а-яА-ЯЁё' -]{2,22}))$/u;
  const validate = checkValue(nameInput.value, reg);
  if (validate === false) {
    document.querySelector('#name-error').innerHTML = 'Неверно введено имя';
    nameInput.classList.add('error');
    isNameValid = false;
  } else {
    document.querySelector('#name-error').innerHTML = '';
    nameInput.classList.remove('error');
    isNameValid = true;
  }
});

const emailInput = myForm.elements.emailInput;
emailInput.addEventListener('input', function () {
  const reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const validate = checkValue(emailInput.value, reg);
  if (validate === false) {
    document.querySelector('#email-error').innerHTML = 'Неверно введен email';
    emailInput.classList.add('error');
    isEmailValid = false;
  } else {
    document.querySelector('#email-error').innerHTML = '';
    emailInput.classList.remove('error');
    isEmailValid = true;
  }
});

const ageInput = myForm.elements.ageInput;
ageInput.addEventListener('input', function () {
  const reg = /^\d{1,}$/;
  const validate = checkValue(ageInput.value, reg);
  if (validate === false) {
    document.querySelector('#age-error').innerHTML = 'Неверно введен возраст';
    ageInput.classList.add('error');
    isAgeValid = false;
  } else {
    document.querySelector('#age-error').innerHTML = '';
    ageInput.classList.remove('error');
    isAgeValid = true;
  }
});

const sexInput1 = document.querySelector('#sexInput1');
const sexInput2 = document.querySelector('#sexInput2');
const sexInput = myForm.elements.sexInput;
function sexInputCheck() {
  if (sexInput1.checked === false && sexInput2.checked === false) {
    isSexValid = false;
  } else {
    document.querySelector('#sex-error').textContent = '';
    isSexValid = true;
  }
  return isSexValid;
}
isSexValid = sexInputCheck();

function occupationCheck() {
  if (selectOccupation.value === '') {
    isOccupationValid = false;
  } else {
    document.querySelector('#occupation-error').innerHTML = '';
    selectOccupation.classList.remove('error');
    isOccupationValid = true;
  }
  return isOccupationValid;
}
occupationCheck();

const inputPassword = myForm.elements.inputPassword;
inputPassword.addEventListener('input', function () {
  const reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
  const validate = checkValue(inputPassword.value, reg);
  if (validate === false) {
    document.querySelector('#password-error').innerHTML =
      'Длина пароля должна быть от 8 до 20 символов; пароль должен содержать хотя бы одну строчную букву, одну заглавную букву, одну цифру, один специальный символ из набора !@#$%^&*()';
    inputPassword.classList.add('error');
    isPasswordValid = false;
  } else {
    document.querySelector('#password-error').innerHTML = '';
    inputPassword.classList.remove('error');
    isPasswordValid = true;
  }
});

const repeatPassword = myForm.elements.repeatPassword;
repeatPassword.addEventListener('input', function () {
  if (inputPassword.value !== repeatPassword.value) {
    document.querySelector('#password-repeat-error').textContent =
      'Неверно введен пароль';
    repeatPassword.classList.add('error');
    isPasswordSame = false;
  } else {
    document.querySelector('#password-repeat-error').textContent = '';
    repeatPassword.classList.remove('error');
    isPasswordSame = true;
  }
});

const checkbox = myForm.elements.checkbox;
function checkboxCheck() {
  if (!checkbox.checked) {
    isCheckboxValid = false;
  } else {
    document.querySelector('#checkbox-error').textContent = '';
    checkbox.classList.remove('error');
    isCheckboxValid = true;
  }
  return isCheckboxValid;
}
checkboxCheck();

function makeSubmit(event) {
  event.preventDefault();

  if (
    isNameValid &&
    isEmailValid &&
    isAgeValid &&
    sexInputCheck() &&
    occupationCheck() &&
    isPasswordValid &&
    isPasswordSame &&
    checkboxCheck()
  ) {
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(ageInput.value);
    const sexes = document.querySelectorAll('input[name="sexInput"]');
    for (const sex of sexes) {
      if (sex.checked) {
        console.log(sex.value);
      }
    }
    console.log(selectOccupation.value);
    console.log(inputPassword.value);
    console.log(repeatPassword.value);
    console.log('Согласие на обработку персональных данных дано');
  } else {
    document.querySelector('#submit-error').textContent =
      'Проверьте правильность введенных данных';
    if (isNameValid === false) {
      document.querySelector('#name-error').innerHTML = 'Неверно введено имя';
      nameInput.classList.add('error');
    }

    if (isEmailValid === false) {
      document.querySelector('#email-error').innerHTML = 'Неверно введен email';
      emailInput.classList.add('error');
    }

    if (isAgeValid === false) {
      document.querySelector('#age-error').innerHTML = 'Неверно введен возраст';
      ageInput.classList.add('error');
    }

    if (sexInputCheck() === false) {
      document.querySelector('#sex-error').textContent = 'Нужно выбрать пол';
    }

    if (occupationCheck() === false) {
      document.querySelector('#occupation-error').innerHTML =
        'Выберите профессию';
      selectOccupation.classList.add('error');
      selectOccupation.selectedIndex = -1;
    }

    if (isPasswordValid === false) {
      document.querySelector('#password-error').innerHTML =
        'Длина пароля должна быть от 8 до 20 символов; пароль должен содержать хотя бы одну строчную букву, одну заглавную букву, одну цифру, один специальный символ из набора !@#$%^&*()';
      inputPassword.classList.add('error');
    }

    if (isPasswordSame === false) {
      document.querySelector('#password-repeat-error').textContent =
        'Неверно введен пароль';
      repeatPassword.classList.add('error');
    }

    if (checkboxCheck() === false) {
      document.querySelector('#checkbox-error').textContent =
        'Необходимо согласие на обработку персональных данных';
      checkbox.classList.add('error');
    }
  }
}
