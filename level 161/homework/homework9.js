const fs = require('fs');

process.stdin.on('data', (input) => {
    const userInput = input.toString().trim();
    if (userInput) {
        fs.appendFile('./userEnterTextHere.txt', `User Text: ${userInput}\n`, (err) => {
            if (err) {
                console.log('Error writing to file:', err);
            } else {
                console.log(`User input "${userInput}" added to userEnterTextHere.txt`);
            }
        });
    }
});
