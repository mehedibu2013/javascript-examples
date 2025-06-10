# 🛒 Simple Shopping Cart

A basic implementation of a shopping cart system using JavaScript. This project allows users to add items to a cart, view the cart contents, and place orders based on available products.

---

## 📦 Features

- Add products to the cart
- View current cart contents
- Place an order and calculate total price
- Stock management for each product

---

## 🧾 Products

Currently, the system supports the following products:

| ID | Name       | Price | Stock |
|----|------------|-------|--------|
| 1  | Smartphone | $200  | 10     |
| 2  | Laptop     | $800  | 5      |

---

## 🚀 How to Use

This is a simple script-based application. You can run it in any JavaScript environment such as Node.js or a browser console.

### Functions Available

- `addToCart(productId, quantity)`  
  Adds a specified quantity of a product to the cart.

- `viewCart()`  
  Displays the current contents of the cart.

- `placeOrder()`  
  Places an order with the current cart items and clears the cart.

---

## ▶️ How to Run

You can run this shopping cart application in two main environments:

### ✅ In a Browser Console

1. Open your browser (e.g., Chrome, Firefox).
2. Open Developer Tools:
   - Right-click the page > **Inspect** > go to the **Console** tab.
3. You may see a warning when pasting code:
   ```
   Warning: Don't paste code into the DevTools Console that you don't understand...
   ```
4. Type `allow pasting` and press Enter to disable the protection.
5. Paste the entire JavaScript code into the console and press **Enter**.
6. Call functions manually:
   ```javascript
   addToCart(1, 2); // Adds 2 Smartphones
   viewCart();      // View current cart
   placeOrder();    // Place the order
   ```

---

### ✅ With Node.js (Locally)

1. **Install Node.js**  
   If not already installed, download and install from [https://nodejs.org](https://nodejs.org).

2. **Create a file**  
   Create a new file named `shoppingCart.js` and paste the full JavaScript code into it.

3. **Run the script**
   In your terminal or command prompt, navigate to the folder containing the file and run:
   ```bash
   node shoppingCart.js
   ```

   The output will be printed directly in the terminal.

---

## 🧪 Example Usage

```javascript
addToCart(1, 2); // Adds 2 Smartphones to the cart
addToCart(2, 1); // Adds 1 Laptop to the cart

viewCart(); // Displays the current cart

placeOrder(); // Places the order and calculates total price
```

---

## 📁 Project Structure

- `products`: Array of available products with their details.
- `cart`: Array containing items added by the user.
- `orders`: Array of placed orders with total price and date.

---

## 📝 Sample Output

```
Smartphone added to cart. Quantity: 2
Laptop added to cart. Quantity: 1
Cart: [
  { id: 1, name: 'Smartphone', quantity: 2 },
  { id: 2, name: 'Laptop', quantity: 1 }
]
Placing order...
"Order placed"
```

---

## 🧩 Future Improvements (Ideas)

- Add a remove item from cart feature
- Allow updating quantities in the cart
- Store orders persistently
- Implement a UI using HTML/CSS

---

## 🙌 Contributing

Feel free to fork this repository and contribute improvements! Open an issue or submit a pull request.

---

## 📄 License

MIT License – see [LICENSE](LICENSE) for details.

---