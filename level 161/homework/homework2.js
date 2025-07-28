const fs = require('fs')

try{
    const data = fs.readFileSync('./text.txt', 'utf8');
    console.log('File content:', data);
}catch(err){
    console.error('Error reading file:', err);
}