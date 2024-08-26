// Function to create the HTML structure
function getCartAddHtml() {
    return `
        <div class="cartAdd">
            <img class="decrease" src="./assets/images/icon-decrement-quantity.svg">
            <div class="numberCart">1</div>
            <img class="increase" src="./assets/images/icon-increment-quantity.svg">
        </div>`;
}

// Attach a single event listener to a parent element
document.body.addEventListener('click', function(event) {
    // Check if the clicked element is or is inside a cartclick element
    const cartclickElement = event.target.closest('.cartclick');
    if (cartclickElement) {
        // Add the cartAdd HTML if not already present
        if (!cartclickElement.querySelector('.cartAdd')) {
            cartclickElement.innerHTML = getCartAddHtml();
        }
    }

    // Handle clicks on the increase and decrease buttons
    if (event.target.classList.contains('increase') || event.target.classList.contains('decrease')) {
        const cartAddDiv = event.target.closest('.cartAdd');
        const numberCartDiv = cartAddDiv.querySelector('.numberCart');

        if (event.target.classList.contains('increase')) {
            let currentNumber = parseInt(numberCartDiv.textContent, 10);
            numberCartDiv.textContent = currentNumber + 1;
        } else if (event.target.classList.contains('decrease')) {
            let currentNumber = parseInt(numberCartDiv.textContent, 10);
            if (currentNumber > 1) {
                numberCartDiv.textContent = currentNumber - 1;
            }
        }
    }
});
