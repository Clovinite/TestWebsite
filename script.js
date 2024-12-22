document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'admin' && password === 'admin') {
            alert('Login successful!');
            window.location.href = 'loggedin.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const replyEmail = document.getElementById('replyEmail').value;
    
    if (subject && message && replyEmail) {
        alert('Message sent successfully!');
        // Here you can add code to send the form data to a server or an email service
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
fetch('https://discord.com/api/webhooks/1320482387770998844/ayevQjOHjPGX_7egbGO-gPfOMw1gWUNVFMwcs545n4OPBZoQGp2idhhPY52IDhiteKDG', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        subject: subject,
        message: message,
        replyEmail: replyEmail
    })
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});