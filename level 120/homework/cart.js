const products = [];
function addProductToTheCart(x){
   products.push(x);
   return products
}
console.log(addProductToTheCart('apple'))

module.exports = {
    addProductToTheCart
}