document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signinButton = document.getElementById('signin-button');

    signinButton.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate inputs
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        try {
            // Check user credentials
            const response = await fetch('http://localhost:3000/users?email=' + encodeURIComponent(email));
            const users = await response.json();

            if (users.length === 0) {
                alert('User does not exist. Please sign up.');
                return;
            }

            const user = users[0]; // Assuming email is unique
            if (user.password !== password) {
                alert('Incorrect password. Please try again.');
                return;
            }

            // Redirect to homepage after successful login
            window.location.href = '/index.html';

        } catch (error) {
            console.error('Error:', error);
            alert('There was a problem with the sign-in process.');
        }
    });
});
