const modalToggle = document.querySelectorAll('.modal-toggle');
const modal = document.querySelector('.modal');
const loginbtn = document.getElementById('loginbtn');
const msg = document.querySelector('.msg');
const email = document.getElementById('email');
const password = document.getElementById('password');

// change backgroundColor
// var css = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(135deg, " + color1.value + ", " + color2.value + ")";
}

modalToggle.forEach((modalToggle) => {
    modalToggle.addEventListener('click', () => {
        modal.classList.toggle('active');
    })
});

loginbtn.addEventListener('click', () => {

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const validemail = document.querySelector('.email').value;
    const validpass = '1234';

    // prevent default validation
    event.preventDefault();

    // if both email and password or one of themis empty
    if (email.value == "" || password.value == "") {
        // diplay error message
        email.style.borderColor = 'rgba(255,0,0,0.466)';
        password.style.borderColor = 'rgba(255,0,0,0.466)';
        msg.classList.add('active');
        msg.innerHTML = "Please fill all the fields";
        msg.style.backgroundColor = 'rgba(255, 0, 0, 0.466)';
        // else if ema is not valid
    } else if (!validemail.match(pattern)) {
        // add error borderColor and display error message
        email.style.borderColor = 'rgba(255,0,0,0.466)';
        msg.classList.add('active');
        msg.innerHTML = "Please enter a valid email";
        msg.style.backgroundColor = 'rgba(255, 0, 0, 0.466)';
        // or if pasword isn't correct
    } else if (password.value != validpass) {
        // display error message
        password.style.borderColor = 'rgba(255,0,0,0.466)';
        msg.classList.add('active');
        msg.innerHTML = 'Please enter a valid password';
        msg.style.backgroundColor = 'rgba(255, 0, 0, 0.466)';
        // 
    } else {
        email.style.borderColor = 'rgba(0, 128, 0, 0.452)';
        password.style.borderColor = 'rgba(0, 128, 0, 0.452)';
        // msg.classList.remove('active');
        msg.classList.add('active');
        msg.innerHTML = "You are now online";
        msg.style.backgroundColor = 'rgba(0, 128, 0, 0.452)';
        // Remove the message box
        setTimeout(() => {
            msg.classList.remove('active');
        }, 2000);
        email.value = "";
        password.value = "";

    }

});

// toggling password to text

const togglePass = document.querySelector('.togglePass');


togglePass.innerHTML = 'show';
// function passToggle() {
togglePass.onclick = () => {
    if (password.type === 'password') {
        password.type = 'text';
        togglePass.innerHTML = 'hide';
    } else {
        password.type = 'password';
        togglePass.innerHTML = 'show';
    }
}

// color picker
const colorPicker = document.querySelector('.changebtn img');
const colors = document.querySelector('.colors');

colorPicker.onclick = () => {
    colors.classList.toggle('active')
}