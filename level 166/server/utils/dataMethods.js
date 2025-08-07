const fs = require('fs')

const readFile = (filePath) => {
    const data = fs.readFile(filePath, 'utf-8')
    return data
}

module.exports = readFile