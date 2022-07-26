const popup = document.querySelector('.popup'),
    popupContent = document.querySelector('.popup__content');
const popupInput = document.querySelector('.popup__input'),
    inputEmail = document.querySelector('.input__email'),
    inputPassword = document.querySelector('.input__password'),
    inputSubmit = document.querySelector('.input__submit');
const loginBtn = document.querySelector('.header__btn-login');
const popupTitle = document.querySelector('.popup__title'),
    popupLoginBtn = document.querySelector('.popup__login');
const popupFooter = document.querySelector('.popup__footer'),
    popupFooterP = popupFooter.querySelector('p'),
    popupFooterA = document.querySelector('.popup__login'),
    popupA = popupFooter.querySelector('p > a');


let popupClone = popup.cloneNode(true);

inputSubmit.addEventListener('click', e => {
    const valueEmail = inputEmail.value;
    const valuePassword = inputPassword.value
    alert(`Email:  ${valueEmail}    Password:  ${valuePassword}`);
});

function popupCreate() {
    popupContent.style.height = 660 + 'px';
    popupTitle.textContent = 'Log in to your account';
    popupTitle.style.width = 330 + 'px';


    let inputGoogle = document.createElement('input');
    inputGoogle.className = "inputGoogle";
    inputGoogle.classList = "input__social";
    inputGoogle.setAttribute('placeholder', 'Sign In with Facebook')
    popupInput.prepend(inputGoogle);

    popupInput.insertAdjacentHTML('beforebegin', `<hr class='input__hr-left' align="center" size="4" width="261px" 
    style="background:rgba(13, 96, 111, 0.5); margin: 0px 46px 20px 44px;"></hr>
    <span class='input__hr-line'>or</span>
    <hr class='input__hr-right' align="center" size="4" width="261px" 
    style="background:rgba(13, 96, 111, 0.5); margin: 0px 46px 20px 44px;"></hr>`);

    let inputFacebook = document.createElement('input');
    inputFacebook.className = "inputFacebook";
    inputFacebook.classList = "input__social";
    inputFacebook.setAttribute('placeholder', 'Sign In with Google')
    popupInput.prepend(inputFacebook)

    inputSubmit.value = 'Sign In';
    popupFooter.innerHTML = "<p>Don’t have an account ?<a>Register</a></p>"
    popupFooterA.textContent = 'Register';
    // popupA.className = "popup__login";
}

popupLoginBtn.addEventListener('click', popupCreate);

// loginBtn.addEventListener('click', e => )