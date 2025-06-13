const restaurants = [
    { id: 1, name: "Pizza Place", menu: [{ name: "Pepperoni Pizza", price: 12 }] },
    { id: 2, name: "Sushi House", menu: [{ name: "Salmon Sushi", price: 15 }] }
];
const orders = [ ];
const reviews = [ ];
// Discount in percentage
const discountCodes = { "SAVE10": 10, "WELCOME15": 15 }; 

/**
 * Gets the price of a food item from a specific restaurant.
 * @param {string} foodName - The name of the food item.
 * @param {string} restaurantName - The name of the restaurant.
 * @returns {number|string} The price of the food item, or a string indicating that the food or restaurant was not found.
 */
function getFoodPrice(foodName, restaurantName) {
    const restaurant = restaurants.find(r => r.name === restaurantName);
    if (restaurant) {
        const foodItem = restaurant.menu.find(item => item.name === foodName);
        if (foodItem) {
            return foodItem.price;
        } else {
            return "Food item not found";
        }
    } else {
        return "Restaurant not found";
    }
}

/**
 * Places a food order.
 * @param {string} customerName - The name of the customer.
 * @param {string} foodName - The name of the food item.
 * @param {string} restaurantName - The name of the restaurant.
 * @param {string} [discountCode] - An optional discount code.
 * @returns {object|string} The order object if successful, or an error string.
 */
function placeOrder(customerName, foodName, restaurantName, discountCode) {
    const price = getFoodPrice(foodName, restaurantName);
    if (typeof price !== 'number') {
        return price; // Return the error message from getFoodPrice
    }

    let finalPrice = price;
    if (discountCode) {
        if (discountCodes[discountCode]) {
            finalPrice = price * (1 - discountCodes[discountCode] / 100);
        } else {
            return "Invalid discount code";
        }
    }

    const order = {
        id: orders.length + 1,
        customerName,
        restaurantName,
        foodName,
        price: finalPrice,
    };

    if (discountCode) {
        order.discountCode = discountCode;
    }

    orders.push(order);
    return order;
}

/**
 * Generates a sales report for a specific restaurant.
 * @param {string} restaurantName - The name of the restaurant.
 * @returns {{restaurant: string, totalOrders: number, totalSales: number}} An object containing the sales report.
 */
function getSalesReportperRestaurant(restaurantName) {
    const restaurantOrders = orders.filter(order => order.restaurantName === restaurantName);
    const totalSales = restaurantOrders.reduce((total, order) => total + order.price, 0);
    return {
        restaurant: restaurantName,
        totalOrders: restaurantOrders.length,
        totalSales: totalSales
    };
}

/**
 * Adds a review for a restaurant.
 * @param {number} orderId - The ID of the order to review.
 * @param {string} customerName - The name of the customer.
 * @param {number} rating - The rating from 1 to 5.
 * @param {string} comment - The review comment.
 * @returns {object|string} The review object if successful, or an error string.
 */
function addReview(orderId, customerName, rating, comment) {
    if (rating < 1 || rating > 5) {
        return "Rating must be between 1 and 5.";
    }
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        return "Order not found.";
    }
    if (order.customerName !== customerName) {
        return "You can only review your own orders.";
    }
    const existingReview = reviews.find(r => r.orderId === orderId);
    if (existingReview) {
        return "You have already reviewed this order.";
    }
    const review = {
        id: reviews.length + 1,
        orderId,
        restaurantName: order.restaurantName,
        customerName,
        rating,
        comment
    };
    reviews.push(review);
    return review;
}

/**
 * Gets all reviews for a specific restaurant.
 * @param {string} restaurantName - The name of the restaurant.
 * @returns {object[]|string} An array of review objects, or a string indicating that the restaurant was not found or has no reviews.
 */
function getRestaurantReviews(restaurantName) {
    const restaurant = restaurants.find(r => r.name === restaurantName);
    if (!restaurant) {
        return "Restaurant not found.";
    }
    const restaurantReviews = reviews.filter(review => review.restaurantName === restaurantName);
    if (restaurantReviews.length === 0) {
        return `No reviews for ${restaurantName} yet.`;
    }
    return restaurantReviews;
}

/**
 * Gets a list of top-rated restaurants.
 * @returns {object[]} A sorted list of restaurants with their average ratings.
 */
function getTopRatedRestaurants() {
    const restaurantRatings = {};
    reviews.forEach(review => {
        if (!restaurantRatings[review.restaurantName]) {
            restaurantRatings[review.restaurantName] = {
                totalRating: 0,
                reviewCount: 0
            };
        }
        restaurantRatings[review.restaurantName].totalRating += review.rating;
        restaurantRatings[review.restaurantName].reviewCount++;
    });

    const averagedRatings = Object.keys(restaurantRatings).map(restaurantName => {
        const ratingInfo = restaurantRatings[restaurantName];
        return {
            restaurant: restaurantName,
            averageRating: ratingInfo.totalRating / ratingInfo.reviewCount
        };
    });

    return averagedRatings.sort((a, b) => b.averageRating - a.averageRating);
}

console.log(getFoodPrice("Pepperoni Pizza","Pizza Place"));
console.log(getFoodPrice("Salmon Sushi","Sushi House"));
console.log(getFoodPrice("xyz","abc"));
const johnsOrder = placeOrder("John","Pepperoni Pizza","Pizza Place", "SAVE10");
if (typeof johnsOrder === 'object') {
    console.log(`Your order is successfully placed. Order ID: ${johnsOrder.id}`);
} else {
    console.log(johnsOrder);
}

const myOrder = placeOrder("Me","Pepperoni Pizza","Pizza Place", "SAVE10");
if (typeof myOrder === 'object') {
    console.log(`Your order is successfully placed. Order ID: ${myOrder.id}`);
} else {
    console.log(myOrder);
}

const pizzaReport = getSalesReportperRestaurant("Pizza Place");
console.log(`Total sales for ${pizzaReport.restaurant}: $${pizzaReport.totalSales.toFixed(2)} from ${pizzaReport.totalOrders} orders.`);

const sushiReport = getSalesReportperRestaurant("Sushi House");
console.log(`Total sales for ${sushiReport.restaurant}: $${sushiReport.totalSales.toFixed(2)} from ${sushiReport.totalOrders} orders.`);

console.log(addReview(1, "John", 5, "Great pizza!"));
console.log(addReview(2, "Me", 4, "Good sushi, but a bit pricey."));
console.log(addReview(1, "John", 3, "It was okay.")); // Already reviewed
console.log(addReview(3, "Jane", 5, "Order not found."));
console.log(reviews);

console.log(getRestaurantReviews("Pizza Place"));
console.log(getRestaurantReviews("Sushi House"));
console.log(getRestaurantReviews("Burger Joint"));

console.log("Top rated restaurants:", getTopRatedRestaurants());