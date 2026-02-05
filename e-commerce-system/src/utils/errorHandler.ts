/**Error Handling Utility:

Error Handler Module (errorHandler.ts):
Implement a custom error class and functions to handle different types of errors gracefully.
 */

//Create Custom Error Classes functions to handle different types of errors gracefully.
  export class NetworkError extends Error {
  constructor(message = "Network connection error") {
    super(message);
    this.name = "NetworkError";
  }
}
export class DataError extends Error {
  constructor(message = "Invalid or missing data") {
    super(message);
    this.name = "DataError";
  }
}
//  .catch(error => {
//     if (error instanceof DataError) {
//       console.error("Catalog Error:", error.message);

//     } else if (error instanceof NetworkError) {
//       console.error("Reviews Error:", error.message);
//     }
//     else {
//       console.error("Unknown Error:", error);
//     }
//   })
//   .finally(() => {
//     console.log("All API calls  attempted");
//   });