const fs = require('fs')
process.stdin.on('data', (input) => {
   const name = input.toString().trim();
   if(name){
    fs.appendFile('./names.txt' , `, ${name}`, (err) => {
        if (err){
            console.log('Error writing to file:', err);
        }else{
            console.log(`Name "${name}" added to names.txt`);
        }
        process.exit();
   })
}else{
    console.log('No name provided. Exiting...');
    process.exit();
}
})