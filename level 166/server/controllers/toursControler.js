const fs = require('fs')

const getTours = () => {
    const readingFile = fs.readFileSync("/tours.json", 'utf-8')
    res.writeHead(200, { "content-type" : "application/json"}) 
    return res.end(readingFile)
}

module.exports = getTours;