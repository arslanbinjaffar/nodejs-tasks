
// Problem 1: Asynchronous Operations
// Create a function that takes in an array of URLs and downloads the contents from each URL
// using asynchronous methods.Once all downloads are complete, return an array with the downloaded
// contents in the same order as the URLs.

const  axios = require("axios")
const fetchContent = async (url) => {
    try {
        const response = await axios(url)
        const content = await response.text() 
        if (!response.ok) {
            console.log("please check your api link")
        }
       return content 
    } catch (error) {
        console.error(`Error fetching content from ${url}:`, error.message);
        // throw error
    }
}
const downloadContents =async (urls) => {
    try {
        let result = []
        await Promise.all(urls.map(async (url) => {
            const content = await fetchContent(url)
            result.push(content)
       }))
        return result
    } catch (error) {
        console.error("Error downloading contents:", error.message);
      
    }
}
const urls = ['https://json.com/1', 'https://json.com/2', 'https://json.com/3'];

exports.modules.MultipleContents = async(urls) => {
    try {
        const contents = await downloadContents(urls)
        console.log("Downloaded contents:", contents)
    }
    catch(error) {
        console.error('Fatal error in MultipleContent:', error);
        // throw err
    }
}
MultipleContents(urls)