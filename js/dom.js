// Add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = parseInt(button.dataset.productId);
    buy(productId);
  });
});

// Clear cart button

const clearCartButton = document.querySelector('#clean-cart');

clearCartButton.addEventListener('click', () => {
  cleanCart();
});