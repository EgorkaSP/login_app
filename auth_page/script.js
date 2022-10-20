const usernameValue = document.getElementById('input-field');
const passwordValue = document.getElementById('password-field');

const submitForm = (event) => {
    event.preventDefault(event);
   
    if (usernameValue.value.trim() === '' ||
        passwordValue.value.trim() === '') {
        alert('Введите логин и пароль!');
    } else {
        let validationData = `${usernameValue.value} - ${passwordValue.value}`;
        localStorage.setItem('token', validationData);
        // window.location.href = 
        window.open('../main_page/index2.html');
        usernameValue.value = '';
        passwordValue.value = '';
    } 
}
