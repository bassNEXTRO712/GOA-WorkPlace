const  {x, xx, xxx, xxxx } = require("./math.js");
console.log(x(1,2))
console.log(xx(1,2))
console.log(xxx(1,2))
console.log(xxxx(1,2))


const {greetUser} = require('./greetUser.js');
console.log(greetUser('Jonka'));


const {roundTheNumber} = require('./roundTheNumbers.js')
console.log(roundTheNumber(9.9))

const {addProductToTheCart} = require('./cart.js')
console.log(addProductToTheCart('shimpanziniii bananiniii'))