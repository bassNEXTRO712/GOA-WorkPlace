const fs = require('fs')
fs.readFile('./names.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return;
   
  }else{
      const names = data.split(',')
        console.log('Names:', names)
  }

})




try {
  const data = fs.readFileSync('./names.txt', 'utf8');

  const names = data.split(',');


  console.log('Names:', names);
} catch (err) {

  console.error('Error reading file:', err.message);
}

