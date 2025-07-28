const fs = require('fs')

fs.readFile('./text2.txt', 'utf8', (err, data) => {
    if(err){
        console.log('There Is Something Wrong!!', err);
        return;
    }else{
        console.log('File content:', data.toUpperCase());
    }
})