/*Discount Calculator Module (discountCalculator.ts):
Create a calculateDiscount() function to handle discount calculations for products.
This function should return the dollar amount that a product is discounted by.
For example, if a product costs $100 and has a 10% discount, the function should return $10.*/
//Original Price * (Discount Rate / 100).
// Note that the product data returned from the API does not include a taxPercentage field like it includes a discountPercentage field.
//  Apply a default standard tax rate of 4.75% to each product; however, products with a category of “groceries” should only be taxed at 3%.
//function to handle discount calculations for products
import { Product } from "../models/Product.js";
export function calculateDiscount(product) {
    return product.price * (product.discountPercentage / 100);
}
