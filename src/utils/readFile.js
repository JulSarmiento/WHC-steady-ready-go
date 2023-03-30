const fs = require("fs");

/**
 * 
 * @param {string} filename 
 * @returns array with parsed data
 */
async function readFiles (filename) {
    try {
        const data = await fs.promises.readFile(filename, "utf-8");
        return !data ? [] : JSON.parse(data);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = readFiles;