let products = [
  { id: 1, name: "Smartphone", price: 200, stock: 10 },
  { id: 2, name: "Laptop", price: 800, stock: 5 }
];

let cart = [];
let orders = [];
 
/**
 * Adds the specified quantity of the product with the given id to the cart.
 * If the product is not found or the product is out of stock, a message is logged to the console.
 * If the product is added to the cart, the quantity of the product is updated and a message is logged to the console.
 * @param {number} productId - The id of the product to add to the cart.
 * @param {number} quantity - The quantity of the product to add to the cart.
 */
function addToCart(productId, quantity) {
  let product = products.find(product => product.id === productId);

  if (!product) {
    console.log("Product not found.");
    return;
  }

  if (quantity <= product.stock) {
    cart.push({ id: product.id, name: product.name, quantity: quantity });
    product.stock -= quantity;
    console.log(`${product.name} added to cart. Quantity: ${quantity}`);
  } else {
    console.log("Product out of stock.");
  }
}

addToCart(1, 2);
addToCart(2, 3);


/**
 * Logs the current state of the cart to the console.
 */

 function viewCart() {
   console.log("Cart:", cart);
 }

viewCart();


/**
 * Places an order with the current items in the cart.
 * If the cart is empty, a message is logged to the console and the function returns.
 * The total price of the order is calculated by multiplying the price of each product in the cart by the quantity of that product.
 * The order is then logged to the console, and the cart is cleared.
 * @memberof module:addTocart
 */
function placeOrder(){
  if (cart.length === 0) {
    console.log("Cart is empty. Please add items to the cart.");
    return;
  }
  
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    let product = products.find(product => product.id === cart[i].id);
    totalPrice += product.price * cart[i].quantity;
  }
  
  console.log("Placing order...");
  orders.push({ totalPrice: totalPrice, date: new Date() });
  cart = [];
  return "Order placed";
}

console.log(placeOrder());