// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let total = 0;

// Exercise 1
const buy = (id) => {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    let foundProduct;

    for (const product of products) {
        if (product.id === id) { 
            foundProduct = product;
            console.log('Product in stock')
            break;
        }
    }

    let foundInCart = false;

    for (const item of cart) {
        if (foundProduct.id === item.id ) {
            item.quantity += 1;
            foundInCart = true;
            console.log(`${foundProduct.name} already in cart: incrementing quantity`)
            break;
        }
    }

    if (!foundInCart) {
        cart.push({...foundProduct, quantity: 1});
        console.log(`${foundProduct.name} added to cart`);
    }
    console.log(cart);

    applyPromotionsCart();
    calculateTotal();
    printCart();
}

// Exercise 2
const cleanCart = () =>  {
    cart.length = 0;
    total = 0;
    console.log('Cart emptied');
    printCart();
}

// Exercise 3
const calculateTotal = () => {
    total = 0;

    cart.forEach(item => {
        const itemSubTotal = item.price * item.quantity;
        if (item.id === 1 && item.quantity >= 3 || item.id === 3 && item.quantity >= 10) {
            total += item.subtotalWithDiscount ?? itemSubTotal;
        } else {
            total += itemSubTotal;
        }
    });

  console.log(`Total: ${total.toFixed(2)}`);
  return total;
};


// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
    
    for (const item of cart) {
        if (item.id === 1  && item.quantity >= 3) {
            const subTotalWithoutDiscount = (item.price * item.quantity);
            const subTotalWithDiscount = subTotalWithoutDiscount - (subTotalWithoutDiscount * 0.2);
            item.subtotalWithDiscount = subTotalWithDiscount;
            console.log(`Promotion applied: 20% discount on ${item.name} if three or more units added to cart`)
        }
        if (item.id === 3  && item.quantity >= 10) {
            const subTotalWithoutDiscount = (item.price * item.quantity);
            const subTotalWithDiscount = subTotalWithoutDiscount - (subTotalWithoutDiscount * 0.3);
            item.subtotalWithDiscount = subTotalWithDiscount;
            console.log(`Promotion applied: 30% discount on ${item.name} if three or more units added to cart`)
        }
    }
}

// Exercise 5
const printCart = () => {
  const cartList = document.getElementById('cart_list');
  cartList.innerHTML = '';

  for (const item of cart) {
    const tr = document.createElement('tr');
    const itemSubTotal = item.price * item.quantity;

    if (item.id === 1 && item.quantity >= 3 || item.id === 3 && item.quantity >= 10) {
      tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>${itemSubTotal.toFixed(2)}</td>
        <td>${item.subtotalWithDiscount?.toFixed(2) ?? itemSubTotal.toFixed(2)}</td>
      `;
    } else {
      tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>${itemSubTotal.toFixed(2)}</td>
      `;
    }

    cartList.appendChild(tr);
  }

  document.getElementById('total_price').textContent = total.toFixed(2);
};


// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    printCart();
}

// DOM

// Add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = parseInt(button.dataset.productId);
    buy(productId);
  });
});

// Clear cart button

const clearCartButton = document.querySelector('clean-cart');

clearCartButton.addEventListener('click', () => {
  cleanCart();
});