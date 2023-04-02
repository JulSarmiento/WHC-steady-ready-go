const fs = require("fs");

/**
 * 
 * @param {string} filename 
 * @returns array with parsed data
 */
async function readFiles (filename) {
    const data = await fs.promises.readFile(filename, "utf-8");
    return !data ? [] : JSON.parse(data);
}

module.exports = readFiles;