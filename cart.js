document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const cartItems = document.querySelectorAll('.product-cart-list');
    const cartSubtotal = document.querySelector('.cart-list-subtotal');
    const checkoutButton = document.querySelector('.cart-right button');
    
    // Function to calculate subtotal
    function calculateSubtotal() {
        let subtotal = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.product-cart-titleprice b').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('select').value, 10);
            subtotal += price * quantity;
        });
        const itemsCount = cartItems.length;
        cartSubtotal.innerHTML = `Subtotal (${itemsCount} item${itemsCount > 1 ? 's' : ''}): <b>$${subtotal.toFixed(2)}</b>`;
    }

    // Function to handle quantity changes
    function handleQuantityChange(event) {
        if (event.target.tagName === 'SELECT') {
            calculateSubtotal();
        }
    }

    // Function to handle item removal
    function handleItemRemoval(event) {
        if (event.target.classList.contains('action-button') && event.target.textContent.trim() === 'Delete') {
            const item = event.target.closest('.product-cart-list');
            item.remove();
            calculateSubtotal();
        }
    }

    // Function to handle checkout
    function handleCheckout() {
        const isLoggedIn = true; // Placeholder for actual login check
        if (isLoggedIn) {
            window.location.href = '/checkout.html'; // Redirect to checkout page
        } else {
            alert('Please sign in to proceed to checkout.');
            window.location.href = '/signing.html'; // Redirect to sign-in page
        }
    }

    // Event listeners
    document.querySelector('.cart-left').addEventListener('change', handleQuantityChange);
    document.querySelector('.cart-left').addEventListener('click', handleItemRemoval);
    checkoutButton.addEventListener('click', handleCheckout);

    // Initial calculation
    calculateSubtotal();
});
