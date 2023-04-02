const fs = require("fs");

/**
 * 
 * @param {string} filename 
 * @param {array} array 
 */
async function saveFiles(filename, array) {
    return await fs.promises.writeFile(filename, JSON.stringify(array, null, 2));
}

module.exports = saveFiles