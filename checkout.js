document.addEventListener('DOMContentLoaded', function() {
    const addressSubmitBtn = document.getElementById('address-submit');
    const paymentSubmitBtn = document.getElementById('payment-submit');
    const confirmOrderBtn = document.getElementById('confirm-order');
    
    addressSubmitBtn.addEventListener('click', function() {
        const addressForm = document.getElementById('address-form');
        
        if (addressForm.checkValidity()) {
            // Hide address form and show payment form
            addressForm.style.display = 'none';
            document.getElementById('payment-form').style.display = 'block';
        } else {
            // Display validation errors
            addressForm.reportValidity();
        }
    });
    
    paymentSubmitBtn.addEventListener('click', function() {
        const paymentForm = document.getElementById('payment-form');
        
        if (paymentForm.checkValidity()) {
            // Process payment (dummy function here)
            alert('Payment processed!');
            // Show order summary
            document.getElementById('order-summary').innerHTML = `
                <p>Order Summary:</p>
                <p>Items: 2</p>
                <p>Total: $274.99</p>
            `;
        } else {
            // Display validation errors
            paymentForm.reportValidity();
        }
    });
    
    confirmOrderBtn.addEventListener('click', function() {
        alert('Order confirmed! Redirecting to home page.');
        window.location.href = '/';
    });
});
