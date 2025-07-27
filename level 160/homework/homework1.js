const events = require('events')

const myEvents = new events.EventEmitter();

myEvents.on('greet',(name) => {
    console.log(`Hello, ${name}!`);
})

myEvents.emit('greet', 'Nika')





const eventEmitter = new events.EventEmitter();

eventEmitter.on('sayHi', (user,user2,user3) => {
    console.log(`Hello ${user} ${user2},${user3}!`);
})

eventEmitter.emit('sayHi', 'George','Nika', 'Giorgi');