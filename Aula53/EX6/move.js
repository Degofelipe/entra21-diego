const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

(async () => {
    try {
        await fsPromises.rename(path.resolve(__dirname, "animal.jpg"), "..", "EX5", "coala.jpg");
        console.log("Arquivo renomeado");
    } catch (err) {
        console.log(err.message);
    }    
})();


// const currentPath = path.join(__dirname, "coala.jpg");
// const destinationPath = path.join(__dirname, "..", "EX5", "animal.jpg");

// fs.rename(currentPath, destinationPath, function (err) {
//     if (err) {
//         throw err
//     } else {
//         console.log("Successfully moved the file!");
//     }
// });