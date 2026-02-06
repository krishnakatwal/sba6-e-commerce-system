/**Import the product classes, tax calculator, and API service.
Create instances of Product by fetching product data from the API.
Use asynchronous functions to fetch product data and display it.
Demonstrate error handling and OOP principles in action. */

import { products } from "./services/apiService.ts";
import { fetchProduct } from "./services/apiService.ts";
import { Product } from "./models/Product.ts";
import { calculateDiscount } from "./utils/discountCalculator.ts";

async function DriverMain() {
  try {
    console.log("conecting to the ");
    // Fetch raw data from the API
    await fetchProduct();
    console.log(`Processing ${products.length}`);

    //Loop through each product and transform it into a Class instance
    for (const product of products) {
      const item = new Product(
        product.id,
        product.title,
        product.description,
        product.category,
        product.price,
        product.discountPercentage,
      );
      console.log(item.displayDetails);
      console.log("Price After Discount", item.discountPercentage);
      console.log("Discount Amount", +calculateDiscount(item).toFixed(2));
      console.log(
        "calculate Tax for the product",
        +calculateDiscount(item).toFixed(2),
      );
    }
  } catch (error) {
    // This catches the 'throw error' from fetchProduct()
    console.error("execution stopped due to error.");
  }
}
//Executes the main driver function
DriverMain();
