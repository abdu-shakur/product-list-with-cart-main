const addToCartDivs = document.getElementsByClassName("addtocart");

Array.from(addToCartDivs).forEach(div => {
    div.addEventListener("click", () => {
        div.innerHTML = `
            <div>
                <button class="decrease">-</button>
                <span class="quantity">1</span>
                <button class="increase">+</button>
            </div>`;
        div.classList.add("clicked");

        // Add event listeners for the increase and decrease buttons
        div.querySelector(".increase").addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering the parent div click event
            quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
        });

        div.querySelector(".decrease").addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering the parent div click event
            const quantitySpan = div.querySelector(".quantity");
            const currentQuantity = parseInt(quantitySpan.textContent);
            if (currentQuantity > 1) {
                quantitySpan.textContent = currentQuantity - 1;
            }
        });
    });
});
