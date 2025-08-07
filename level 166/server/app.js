const http = require('http')

const { routes } = require('./router/tours.router');
const server = http.createServer((req,res) => {
    routes(req,res)
    
})


server.listen(3000,() => {
    console.log('Server Has Running At Port 3000!!')
})