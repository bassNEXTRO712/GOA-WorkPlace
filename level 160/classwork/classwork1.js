// events gamoiyeneba movlenis gamosawvevad chashenebuli modulia da chirdeba localurad importi 
// on aris eventis chamrtveli aseve gamomwvevic is igivea rac onClick, onChange da onSubmit


// const events = require('events');

// const myEvents = new events.EventEmitter();

// event name, callback function
// myEvents.on('click', (arg1,arg2,arg3,arg4,arg5) => {
   //  console.log('User has clicked on button!',arg1, arg2, arg3, arg4, arg5);
// });


// Emitter - გამომწვევს
// myEvents.emit('click',1, 'Nika', 2, 3, 'George');



let sum = 0;

process.stdin.on('data', (userInput) => {
    const input = userInput.toString().trim();
   
    if(input === 'exit'){
        console.log(sum)
        process.exit();
    } 
    
    sum += parseInt(input)
});