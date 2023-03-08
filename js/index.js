// Declare variables for form elements
const submitButton = document.querySelector('#submit-button');
const fullNameInput = document.querySelector('#fullname');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Declare variable for email regular expression
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Declare objects for form data and errors
const formData = {};
const errors = [];

handleFormSubmit() {

// Check if fullname is not empty
if (fullNameInput.value.trim() !== '') {

    // If not empty, add it to the formData object
    formData.fullName = fullNameInput.value.trim();
  } else {
    // If empty, add an error message to the errors array
    errors.push('Full name is required');
  }
  

  // Check if email is not empty
if (emailInput.value.trim() !== '') {
    // If not empty, check if it's a valid email using the email regex
    if (emailRegex.test(emailInput.value.trim())) {
      // If it's valid, add it to the formData object
      formData.email = emailInput.value.trim();
    } else {
      // If it's not valid, add an error message to the errors array
      errors.push('Invalid email format');
    }
  } else {
    // If empty, add an error message to the errors array
    errors.push('Email is required');
  }
  



// Check if message is not empty
if (messageInput.value.trim() !== '') {
    // If not empty, add it to the formData object
    formData.message = messageInput.value.trim();
  } else {
    // If empty, add an error message to the errors array
    errors.push('Message is required');
  }
  

// Check if there are any errors
if (errors.length > 0) {
    // If there are errors, print them to the console
    console.error('Errors:', errors);
  } else {
    // If there are no errors, print the formData object to the console
    console.log('Form data:', formData);
    // Clear the input fields
    fullNameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
};






  // Register your form to "click" event.
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    handleFormSubmit();
  });
  
