// Auto-slide functionality for the banner
const bannerImages = ['img/banner1.jpg', 'img/banner2.jpg', 'img/banner3.jpg'];
let currentImageIndex = 0;

function changeBannerImage() {
  const banner = document.querySelector('.banner');
  banner.style.backgroundImage = `url(${bannerImages[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
}

setInterval(changeBannerImage, 5000);

// Form validation for the contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Validate name
  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();

  if (name === '') {
    showError(nameInput, 'Please enter your name');
    return;
  }

  // Validate email
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  if (email === '') {
    showError(emailInput, 'Please enter your email');
    return;
  }

  if (!isValidEmail(email)) {
    showError(emailInput, 'Please enter a valid email');
    return;
  }

  // Validate phone number
  const phoneInput = document.getElementById('phone');
  const phone = phoneInput.value.trim();

  if (phone === '') {
    showError(phoneInput, 'Please enter your phone number');
    return;
  }

  // Validate message
  const messageInput = document.getElementById('message');
  const message = messageInput.value.trim();

  if (message === '') {
    showError(messageInput, 'Please enter your message');
    return;
  }

  // Form is valid, do something with the data (e.g., submit the form)
  contactForm.reset();
  alert('Form submitted successfully!');
});

function showError(input, errorMessage) {
  const formGroup = input.parentElement;
  const errorSpan = formGroup.querySelector('.error');

  if (errorSpan) {
    errorSpan.textContent = errorMessage;
  } else {
    const error = document.createElement('span');
    error.className = 'error';
    error.textContent = errorMessage;
    formGroup.appendChild(error);
  }

  formGroup.classList.add('error');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
