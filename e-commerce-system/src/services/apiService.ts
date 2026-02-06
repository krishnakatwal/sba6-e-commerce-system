/**Handle Asynchronous Operations:
API Service (apiService.ts):
Create API requests using async/await and Promises.
Implement functions to fetch product data and handle errors using try/catch. */

import { Product } from "../models/Product.ts";
export let products: Product[] = [];
//functions to fetch product data and handle errors
export const fetchProduct = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=5&skip=5",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    // const data: Product = await response.json();
    // console.log('Fetched products:', data.products);
    // return data.products;
    //  return data;

    const data = await response.json();
    products = data.products;

    //console.log(data);
    // return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
// fetchProduct();
//  console.log(fetchProduct()) ;
