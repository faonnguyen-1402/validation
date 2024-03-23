const arrayInputId = [
  'firstNameId',
  'lastNameId',
  'passwordId',
  'confirmPasswordId',
];

const arrayErrorId = [
  'first-error',
  'second-error',
  'fourth-error',
  'fifth-error',
];

function checkSamePassword() {
  const passwordElement = document.getElementById(arrayInputId[2]);
  if (!passwordElement) return;

  const confirmPasswordElement = document.getElementById(arrayInputId[3]);
  if (!confirmPasswordElement) return;

  return (
    passwordElement.value === confirmPasswordElement.value &&
    passwordElement.value.length > 8 &&
    confirmPasswordElement.value.length > 8
  );
}

function changeColorForPassword() {
  const passwordElement = document.getElementById(arrayInputId[2]);
  if (!passwordElement) return;

  const confirmPasswordElement = document.getElementById(arrayInputId[3]);
  if (!confirmPasswordElement) return;

  const errorPasswordElement = document.getElementById(arrayErrorId[2]);
  const errorConfirmPasswordElement = document.getElementById(arrayErrorId[3]);
  if (!errorConfirmPasswordElement || !errorPasswordElement) return;

  if (
    passwordElement.value.length > 0 ||
    confirmPasswordElement.value.length > 0
  ) {
    if (!checkSamePassword()) {
      errorConfirmPasswordElement.innerHTML =
        'Password is not same or length of password is not valid ';
      errorConfirmPasswordElement.classList.remove('hide');
      errorConfirmPasswordElement.classList.add('show');
      errorConfirmPasswordElement.style.color = 'Red';
      passwordElement.style = 'border: 4px solid rgb(229 11 11 / 86%);';

      errorPasswordElement.innerHTML =
        'Password is not same or length of password is not valid';
      errorPasswordElement.classList.remove('hide');
      errorPasswordElement.classList.add('show');
      errorPasswordElement.style.color = 'Red';
      confirmPasswordElement.style = 'border: 4px solid rgb(229 11 11 / 86%);';
    }
  }

  if (checkSamePassword()) {
    errorConfirmPasswordElement.innerHTML = '🥰😤😤 Successss ';
    errorConfirmPasswordElement.classList.remove('hide');
    errorConfirmPasswordElement.classList.add('show');
    errorConfirmPasswordElement.style.color = 'Red';
    passwordElement.style = 'border: 4px solid rgb(11 124 229 / 86%);';

    errorPasswordElement.innerHTML = '🥰😤😤 Successss';
    errorPasswordElement.classList.remove('hide');
    errorPasswordElement.classList.add('show');
    errorPasswordElement.style.color = 'Red';
    confirmPasswordElement.style = 'border: 4px solid rgb(11 124 229 / 86%);';
  }
}

function setErrorMessageforEmail() {
  const errorElement = document.getElementById('third-error');
  const inputEmail = document.getElementById('emailId');
  if (!inputEmail.value.includes('@gmail.com')) {
    errorElement.innerHTML = 'Please retype for your Email';
    errorElement.classList.remove('hide');
    errorElement.classList.add('show');
    errorElement.style.color = 'Red';
  } else {
    errorElement.innerHTML = 'Input is valid, please next step ';
    errorElement.style.color = 'blue';
  }
}

function validateUsername() {
  const firstNameElement = document.getElementById('firstNameId');
  const value = firstNameElement.value;
  if (!value || value.split(' ').filter((x) => x).length >= 2);
}

function setErrorMessage(form, idInput, idError) {
  const errorElement = form.querySelector(`[id="${idError}"]`);
  if (!errorElement) return;

  const inputElement = form.querySelector(`[id="${idInput}"]`);
  if (!inputElement) return;

  if (!inputElement.value) {
    errorElement.innerHTML = 'Invalid please retype';
    errorElement.classList.remove('hide');
    errorElement.classList.add('show');
  } else {
    errorElement.innerHTML = '🥰😤 Successss, please next step ';
    errorElement.style.color = 'blue';
  }

  return errorElement;
}

(() => {
  const submitButton = document.querySelector('button[id="submitButtonId"]');
  if (!submitButton) return;

  const checkbox = document.getElementById('checkboxId');
  if (!checkbox) return;

  const formElement = document.getElementById('formId');
  if (!formElement) return;

  checkbox.addEventListener('click', () => {
    if (!checkbox.dataset.check || checkbox.dataset.check === 'false') {
      checkbox.dataset.check = true;
    } else {
      checkbox.dataset.check = false;
    }
  });
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (checkbox.dataset.check === 'false' || !checkbox.dataset.check) return;

    console.log('submit');
    formElement.classList.add('validated');

    arrayInputId.forEach((item, index) => {
      setErrorMessage(formElement, item, arrayErrorId[index]);
    });
    setErrorMessageforEmail();
    changeColorForPassword();
  });
})();
