// Scroll Functionality
const scrollUp = document.getElementById('scroll-up');
const scrollDown = document.getElementById('scroll-down');

scrollUp.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
scrollDown.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Ticket Purchase with Gumroad Integration
const buyTicketBtn = document.getElementById('buy-ticket-btn');
let ticketsRemaining = 50;

buyTicketBtn.addEventListener('click', () => {
    // Gumroad Checkout URL (replace with your actual Gumroad product link)
    const gumroadCheckoutUrl = 'https://cpaboost.gumroad.com/l/lqmbcz'; // Replace with your Gumroad product URL

    try {
        // Simulate ticket availability check (optional backend API call)
        if (ticketsRemaining > 0) {
            // Redirect to Gumroad checkout page
            const checkoutUrl = `${gumroadCheckoutUrl}?wanted=true`;
            window.location.href = checkoutUrl;

            // Update ticket count (assuming Gumroad notifies us post-purchase via webhook)
            ticketsRemaining--;
            document.getElementById('remaining').textContent = ticketsRemaining;
        } else {
            alert('Tickets are sold out!');
        }
    } catch (error) {
        alert('Something went wrong. Please try again.');
    }
});