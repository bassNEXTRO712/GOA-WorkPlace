

const events = require('events');

const EventEmitter = new events.EventEmitter();

EventEmitter.on('userJoined', (userName) => {
    console.log(`user Joined =>  ${userName}`)
})

EventEmitter.emit('userJoined', 'Nika')