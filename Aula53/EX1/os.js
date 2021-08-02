const os = require("os");
    const fsPromises = require("fs/promises")
    const path = require("path")
    const { EOL } = require("os");

    setInterval(async() => {
        const freeMem = parseInt(os.freemem()/1024/1024)
        const totalMem = parseInt(os.totalmem()/1024/1024)
        const usage = parseInt((freeMem * 100) / totalMem)

        const content = {
            freeMem: `${freeMem}MB`,
            totalMem: `${totalMem}MB`,
            usage: `${usage}%`
        }

        const contentInJSON = JSON.stringify(content) + EOL;
        try {
            await fsPromises.appendFile(path.resolve(__dirname, "log.txt"), contentInJSON);
            console.log("Log adicionado");
        } catch(err) {
            console.log(err.message);
        }

    }, 5000);