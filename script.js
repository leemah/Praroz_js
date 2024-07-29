const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validateLoginForm();
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validateSignUpForm();
        });
    }
});

function validateLoginForm() {
    const username = document.getElementById('loginUsername');
    const password = document.getElementById('loginPassword');

    let isValid = true;

    if (username.value.trim() === '') {
        showError(username, 'Username is required');
        isValid = false;
    } else if (username.value.trim().length < 5) {
        showError(username, 'Username must be at least 5 characters long');
        isValid = false;
    } else {
        showSuccess(username);
    }

    if (password.value.trim() === '') {
        showError(password, 'Password is required');
        isValid = false;
    } else {
        showSuccess(password);
    }

    if (isValid) {
        // Submit the form
        alert('Login form is valid');
    }
}

function validateSignUpForm() {
    const username = document.getElementById('signUpUsername');
    const email = document.getElementById('signUpEmail');
    const password1 = document.getElementById('signUpPassword1');
    const password2 = document.getElementById('signUpPassword2');

    let isValid = true;

    if (username.value.trim() === '') {
        showError(username, 'Username is required');
        isValid = false;
    } else if (username.value.trim().length < 5) {
        showError(username, 'Username must be at least 5 characters long');
        isValid = false;
    } else {
        showSuccess(username);
    }

    if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Invalid email');
        isValid = false;
    } else {
        showSuccess(email);
    }

    if (password1.value.trim() === '') {
        showError(password1, 'Password is required');
        isValid = false;
    } else if (password1.value.trim().length < 8) {
        showError(password1, 'Password must be at least 8 characters long');
        isValid = false;
    } else {
        showSuccess(password1);
    }

    if (password2.value.trim() === '') {
        showError(password2, 'Confirm Password is required');
        isValid = false;
    } else if (password1.value.trim() !== password2.value.trim()) {
        showError(password2, 'Passwords do not match');
        isValid = false;
    } else {
        showSuccess(password2);
    }

    if (isValid) {
        // Submit the form
        alert('Sign-up form is valid');
    }
}

function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
    input.classList.remove('success');
    input.classList.add('error');
}

function showSuccess(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
    input.classList.remove('error');
    input.classList.add('success');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

