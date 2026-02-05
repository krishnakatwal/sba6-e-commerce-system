/**Import the product classes, tax calculator, and API service.
Create instances of Product by fetching product data from the API.
Use asynchronous functions to fetch product data and display it.
Demonstrate error handling and OOP principles in action. */
import { Product } from "./models/Product.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { fetchProduct } from "./services/apiService.js";
