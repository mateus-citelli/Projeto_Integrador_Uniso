const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const userIinfo = document.getElementById('userInfo');
const confirmPassword = document.getElementById('passwordSection');
const securityQuestion = document.getElementById('securityQuestionsSection');

const registerButton = document.getElementById('registerButton');

const avanceBt = document.querySelectorAll('.avanceBt');

avanceBt[0].addEventListener('click', () => {
    if(username.value === '' || email.value === '' ){
        alert('Por favor, preencha todos os campos.');
        return;
    }
    userIinfo.style.opacity = '0';
    setTimeout(() => {
        userIinfo.style.display = 'none';
        confirmPassword.style.display = 'flex';
        setTimeout(() => {
            confirmPassword.style.opacity = '1';
        }, 100);
    }, 300);

});  

avanceBt[1].addEventListener('click', () => {
    confirmPassword.style.opacity = '0';
    setTimeout(() => {
        confirmPassword.style.display = 'none';
        securityQuestion.style.display = 'flex';
        setTimeout(() => {
            securityQuestion.style.opacity = '1';
        }, 100);
    }, 300);

});  