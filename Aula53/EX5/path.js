const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

(async () => {
    const nomePasta = path.resolve(__dirname, "../../", "Aula 15 - DOM");
    const files = await fsPromises.readdir(nomePasta);
    console.log(files);
})();