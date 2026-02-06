//Develop Product Class:
// Product Base Class (Product.ts):
// Define a Product class that includes the appropriate properties based on data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.
//https://dummyjson.com/products?limit=5&skip=5
//Discounted Price=price×(1−100discountPercentage​)
export class Product {
    id;
    title;
    price;
    category;
    description;
    discountPercentage;
    // rating: number;
    // stock: number;
    // tags: string[];
    // brand: string;
    // sku: string;
    // weight: number;
    // dimensions: string[];
    // warrantyInformation: string;
    // shippingInformation: string;
    // availabilityStatus: string;
    // reviews: string[];
    // returnPolicy: string;
    // minimumOrderQuantity: number;
    // meta: string[];
    // images: string[];
    // thumbnail: string;
    constructor(id, title, price, category, description, discountPercentage) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = description;
        this.discountPercentage = discountPercentage;
        //   this.rating=rating;
        //   this.stock=stock;
        //   this.tags=tags;
        //   this.brand=brand;
        //   this.sku=sku;
        //   this.weight=weight;
        //   this.dimensions=dimensions;
        //   this.warrantyInformation=warrantyInformation;
        //   this.shippingInformation=shippingInformation;
        //   this.availabilityStatus=availabilityStatus;
        //   this.reviews=reviews;
        //   this.returnPolicy=returnPolicy;
        //   this.minimumOrderQuantity=minimumOrderQuantity;
        //   this.meta=meta;
        //   this.images=images;
        //   this.thumbnail=thumbnail;
    }
    displayDetails() {
        return `Product: ${this.id},${this.title},Price: ${this.price},description:${this.category},Category:${this.discountPercentage}`;
    }
    getPriceWithDiscount() {
        return this.price * (1 - this.discountPercentage / 100);
    }
}
