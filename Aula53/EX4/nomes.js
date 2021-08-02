const chalk = require('chalk');
const fs = require("fs");
const {EOL} = require("os");
const fsPromises = require("fs/promises");
const path = require("path");

(async () => {
    try {
        const nomes = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const nomesVet = nomes.toString("utf-8").split(EOL);        
        const nomesComA = nomesVet.filter(nome => nome[0].toUpperCase() === "A");
        console.log(chalk.red(nomesComA));
        const nomesComC = nomesVet.filter(nome => nome[0].toUpperCase() === "C");
        console.log(chalk.blue(nomesComC));
        const nomesComD = nomesVet.filter(nome => nome[0].toUpperCase() === "D");
        console.log(chalk.magenta(nomesComD));
    } catch (err) {
        console.log(err.message);
    }
})();