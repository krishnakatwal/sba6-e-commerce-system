/**Handle Asynchronous Operations:
API Service (apiService.ts):
Create API requests using async/await and Promises.
Implement functions to fetch product data and handle errors using try/catch. */
import { Product } from "../models/Product.js";
export let products;
//functions to fetch product data and handle errors
export const fetchProduct = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=5&skip=5");
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        // const data: Product = await response.json();
        // console.log('Fetched products:', data.products);
        // return data.products; 
        //  return data;
        const data = await response.json();
        //console.log(data);
        products = data.products;
    }
    catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
fetchProduct();
