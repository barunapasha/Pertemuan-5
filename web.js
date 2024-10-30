document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mainForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if(checkInputs()){
            showModal();
        }
    });

    name.addEventListener('input', () => {
        validateField(name, name.value.trim() !== '', 'Name Cannot Be Blank');
    });

    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
    });

    phone.addEventListener('input', () => {
        validateField(phone, isPhone(phone.value.trim()), 'Not a valid phone number');
    });

    password.addEventListener('input', () => {
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
    });

    message.addEventListener('input', () => {
        validateField(message, message.value.trim() !== '', 'Message cannot be blank');
    });
    
    function checkInputs() {
        let isValid = true;
        validateField(name, name.value.trim() !== '', 'Name cannot be blank');
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
        validateField(phone, isPhone(phone.value.trim()), 'Not a valid phone number');
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
        validateField(message, message.value.trim() !== '', 'Message cannot be blank');

        document.querySelectorAll('.form-control').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;

    }
});