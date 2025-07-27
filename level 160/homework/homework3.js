
//process.stdin.on('data', (userPassword) => {
   // const password = userPassword.toString().trim();

  //  if (password === 'securedPassword12345'){
       //  console.log('Access granted');
   // }else {
 //       console.log('Password is incorrect, try again');
 //   }
//})



process.stdin.on('data', (userInput) => {
    const input = Number(userInput.toString().trim());

    if (input === 19) {
        console.log('You have entered the correct number');
        process.exit();
        
    }else{
        console.log('Incorrect number, please try again')
    }
        
    
})