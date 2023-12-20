// Problem 2: Error Handling

const  axios  = require("axios")

// Design a function that fetches data from an API endpoint.Implement proper error
// handling to handle various HTTP status codes and network failures.
// Log appropriate messages for each type of error encountered.

const fetchEndPoint = async(api) => {
    try {
        const response = await axios(api)
        if (response.status==200) {
            console.log('Data fetched successfully:', response.data);
        }
        else if (!response.status==400) {
            console.error(`Error: "bad request"`);
        }
        else if (response.status == 404) {
            console.error(`Error: Resource not found at ${apiEndpoint}`);
        }
        else {
            console.error(`Error: Unable to fetch data from ${apiEndpoint}. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Error:",error.code)
    }
}
const api = 'https://dummyjson.com/products';
fetchEndPoint(api);