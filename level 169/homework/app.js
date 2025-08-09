const express = require('express')


let fruits = [
  { "id": 1, "name": "Apple", "price": 1.2 },
  { "id": 2, "name": "Banana", "price": 0.5 },
  { "id": 3, "name": "Orange", "price": 0.8 },
  { "id": 4, "name": "Grapes", "price": 2.5 },
  { "id": 5, "name": "Strawberry", "price": 3.0 },
  { "id": 6, "name": "Watermelon", "price": 4.0 }
]

const app = express();
app.use(express.json()); 


app.get('/fruits',(req,res) => {
   
let sortedProduct = [...fruits]
    const sort = req.query.sort
 if(sort === 'price'){
    sortedProduct.sort((a,b) => a.price - b.price)
}else if(sort === '-price'){
    sortedProduct.sort((a,b) => b.price - a.price)
}
    res.json(sortedProduct)
})


app.post('/fruits',(req,res) => {
    const {name,price} = req.body

    if(!name || price === undefined){
        return res.status(400).json({
            status: 'Fail',
            message: 'All fields required: name and price'
    })
    }

    const newFruit = {
        name,
        price
        
    }

    fruits.push(newFruit)
    res.status(201).json(newFruit);
})






app.delete('/fruits/:id',(req,res) => {
    const id = parseInt(req.params.id)
    const index = fruits.findIndex(fruit => fruit.id === parseInt(id))

    if(index === -1){
        return res.status(404).json({
            status: 'Fail',
            message: 'Fruit Not Found'
        })
    }
    fruits.splice(index,1)

    res.status(204).send()
})


app.patch('/fruits/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const fruit = fruits.find(f => f.id === id);

  if (!fruit) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Fruit Not Found'
    });
  }

  const { name, price } = req.body;

  if (name !== undefined) fruit.name = name;
  if (price !== undefined) fruit.price = price;

  res.json(fruit);
});



app.listen(3000,() => {
    console.log('Server Running!')
})