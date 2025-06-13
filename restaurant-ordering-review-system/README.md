# Restaurant Ordering & Review System

This feature implements a basic **restaurant ordering system with discount codes and customer reviews**.

## 🧪 Features Implemented

- `getFoodPrice(foodName, restaurantName)` – Gets price of a specific food item from a restaurant.
- `placeOrder(customerName, foodName, restaurantName, discountCode)` – Places an order with optional discount.
- `getSalesReportperRestaurant(restaurantName)` – Generates total sales and number of orders for a restaurant.
- `addReview(orderId, customerName, rating, comment)` – Adds a review for a completed order.
- `getRestaurantReviews(restaurantName)` – Retrieves all reviews for a specific restaurant.
- `getTopRatedRestaurants()` – Returns a list of top-rated restaurants based on customer reviews.

## 📝 How to Run

To run this script:
1. Save it in a `.js` file (e.g., `app.js`)
2. Run using Node.js: `node app.js`

You can also extend this module by integrating with a database or building a web UI.