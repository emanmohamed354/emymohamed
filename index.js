let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}
const usernameEl = document.querySelector('#username');
const lastnameE1 = document.querySelector('#lastname');
const emailEl = document.querySelector('#email');
const adressEl = document.querySelector('#adress');
const passwordEl = document.querySelector('#password');
const phoneEl = document.querySelector('#phone');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');
const checkAdress = () => {

    let valid = false;

    const min = 10,
        max = 30;

    const adress = adressEl.value.trim();

    if (!isRequired(adress)) {
        showError(adressEl, 'Adress cannot be blank.');
    } else if (!isBetween(adress.length, min, max)) {
        showError(adressEl, `Adress must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(adressEl);
        valid = true;
    }
    return valid;
};


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 12;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};
const checklname = () => {

    let valid = false;

    const min = 3,
        max = 12;

    const lname = lastnameE1.value.trim();

    if (!isRequired(lname)) {
        showError(lastnameE1,'last name cannot be blank.');
    } else if (!isBetween(lname.length, min, max)) {
        showError(lastnameE1, `last name must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(lastnameE1);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has 8 character, must start with 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*) , no white space allowed ');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};
const checkPhone = () => {
    let valid = false;


    const phone = phoneEl.value.trim();

    if (!isRequired(phone)) {
        showError(phoneEl, 'Password cannot be blank.');
    } else if (!isphoneCorrect(phone)) {
        showError(phoneEl, 'Should be only 11 digits');
    } else {
        showSuccess(phoneEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = /^[A-Z](?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s).{7}$/;
    return re.test(password);
};
const isphoneCorrect = (phone) => {
    const re = /^01[0125][0-9]{8}$/;
    return re.test(phone);
};
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}
 function ValidateForm(form){
  if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) ) 
  {        document.getElementById('sss').innerHTML= "Please choose your Gender: Male or Female"; 
  return false;
  }}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        islnameValid = checklname(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword(),
        isAdressvalid = checkAdress(),
        isPhonevalid = checkPhone();


    let isFormValid = isUsernameValid &&
        islnameValid &&
        isEmailValid &&
        isPasswordValid &&
        isAdressvalid &&
        isPhonevalid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        function ValidateForm(form){
  if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) ) 
  {        document.getElementById('sss').innerHTML= "Please choose your Gender: Male or Female"; 
  return false;
  }
  else{

   let visb = document.getElementById("nnn") ;
      let fo =document.getElementById("ff");
      fo.style.cssText="display: none;";
      visb.style.cssText="display:block;";
       
    }
      
    }
ValidateForm(form);}
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'lastname':
            checklname();
            break;
            case 'adress':
                checkAdress();
                break;      
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'phone':
            checkPhone();
            break;    
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
    
}));


