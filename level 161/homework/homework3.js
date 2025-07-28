const fs = require('fs')

fs.readFile('./names.ddd', 'utf8', (err, data) => {
    if (err){
        console.log('File Path Incorrect:', err);
        return;
    }else{
        console.log('File content:', data);
    }
})