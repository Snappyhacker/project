document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const repasswordInput = document.getElementById('repassword');
    const createAccountButton = document.getElementById('create-account');

    createAccountButton.addEventListener('click', async () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const repassword = repasswordInput.value.trim();

        // Validate inputs
        if (!name || !email || !password || !repassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== repassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            // Send the data to the backend
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const data = await response.json();

            // Handle successful account creation
            alert('Account created successfully!');
            // Redirect to sign in or another page if needed
            window.location.href = 'signing.html'; 

        } catch (error) {
            console.error('Error:', error);
            alert('There was a problem creating your account.');
        }
    });
});
