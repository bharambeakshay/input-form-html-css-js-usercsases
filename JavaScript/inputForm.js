//making range button synchronised with values of user
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
//in range button the output shown should always be equal to value the user is updating
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});


//uc1 -name starts with capital letter and min 3 letter
//we are storing the value using id=text and storing into variable
//# specifies id
//instead of query selector we can also use Gettextbyid but sometimes it does not work
const text = document.querySelector('#text');
//similarly getting output for texterror 
//.specifies class
const textError = document.querySelector('.text-error');
//this will throw an event showing that name is incorrect or nothing

text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    }
    else {
        textError.textContent = "Name is incorrect";
    }
});


//uc2 -Validating Email

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp("^[A-Za-z]{3,}([.+_-][A-Za-z0-9]+)*[@][A-Za-z0-9]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?$");
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    }
    else {
        emailError.textContent = "Email is not Valid";
    }
});

//uc3-validating mobile number
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function () {
    let telRegex = RegExp('^[0-9]{2}[ ][0-9]{10}$');
    if (telRegex.test(tel.value)) {
        telError.textContent = "";
    }
    else {
        telError.textContent = "telephone number is not Valid";
    }
});



//uc4-Validating password min 8 characters
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
    let pwdRegex = RegExp('^.{8,}$');
    if (pwdRegex.test(pwd.value)) {
        pwdError.textContent = "";
    }
    else {
        pwdError.textContent = "password is not Valid";
    }
});