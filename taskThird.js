const fs = require("fs")
const path=require("path")

// Problem 3: File System Operations

// Develop a utility that reads a directory and lists all files with a 
// specific extension(e.g., .txt).Implement this functionality using Node.js
// 's File System module.
const listsAllFiles = () => {
     try {
         fs.readdir("./docs",(err,files) => {
             if (err) {
                 console.log(err)
                }
            const filterFiles = files.filter((file) => path.extname(file) === ".txt")
             const listedFiles = filterFiles.map(file => file)
             console.log("list of files:",listedFiles)
         })
    } 
    catch (error) {
       console.log("error:",error) 
    }   
}
listsAllFiles()