// Event Handling
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('hoverButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});

document.getElementById('keypressInput').addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

let pressTimer;
document.getElementById('clickButton').addEventListener('mousedown', function() {
    pressTimer = setTimeout(function() {
        alert('Long press detected!');
    }, 1000); // 1 second
});
document.getElementById('clickButton').addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
});

// Interactive Elements
document.getElementById('changeButton').addEventListener('click', function() {
    this.textContent = 'You clicked me!';
    this.style.backgroundColor = 'orange';
});

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentIndex = 0;
document.getElementById('nextImage').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentIndex];
});

// Form Validation
document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || password.length < 8) {
        alert('Please complete all fields correctly.');
    } else {
        alert('Form submitted successfully!');
    }
});

// Real-time Feedback on Password
document.getElementById('password').addEventListener('input', function() {
    const feedback = document.getElementById('feedback');
    if (this.value.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Password is strong.';
        feedback.style.color = 'green';
    }
});
