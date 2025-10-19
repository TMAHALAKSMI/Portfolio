// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example of form validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        // Clear form fields after submission
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
