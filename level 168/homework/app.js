const express = require('express')
// middleware არის შუამავალი ფუნქცია რომელიც იღებს მოთხოვნას და პასუხს და წყვეტს გააგრძელოს თუ არა მუშაობა!
const app = express();
app.use(express.json());
 let tours = [
  {
    "id": 101,
    "name": "Historic Rome Discovery",
    "location": "Rome, Italy",
    "duration_days": 5,
    "price_usd": 1250,
    "highlights": ["Colosseum", "Vatican Museums", "Trevi Fountain", "Pantheon"],
    "rating": 4.8
  },
  {
    "id": 102,
    "name": "Tokyo Modern & Tradition Tour",
    "location": "Tokyo, Japan",
    "duration_days": 7,
    "price_usd": 1890,
    "highlights": ["Shibuya Crossing", "Senso-ji Temple", "Tsukiji Market", "Mount Fuji Day Trip"],
    "rating": 4.9
  },
  {
    "id": 103,
    "name": "Safari Adventure in Kenya",
    "location": "Maasai Mara, Kenya",
    "duration_days": 6,
    "price_usd": 2200,
    "highlights": ["Big Five Safari", "Maasai Village", "Savannah Sunrise Tour"],
    "rating": 4.7
  },
  {
    "id": 104,
    "name": "Iceland Northern Lights & Ice Caves",
    "location": "Reykjavik, Iceland",
    "duration_days": 4,
    "price_usd": 1600,
    "highlights": ["Northern Lights Viewing", "Blue Lagoon", "Vatnajökull Ice Caves"],
    "rating": 4.85
  },
  {
    "id": 105,
    "name": "Machu Picchu & Sacred Valley",
    "location": "Cusco, Peru",
    "duration_days": 5,
    "price_usd": 1450,
    "highlights": ["Machu Picchu", "Sacred Valley", "Ollantaytambo Ruins", "Pisac Market"],
    "rating": 4.88
  }
];
//Get Method!
app.get('/tours',(req,res) => {
   res.send(tours)
   console.log('Tours Has Added!')
})
//Post Method
app.post('/tours',(req,res) => {
    const newTour = req.body
    tours.push(newTour)
    res.status(201).json({message:'Tours Added',tour: newTour})
    res.send(newTour)
})

//put Method!
app.put('/tours',(req,res) => {
    const id = parseInt(req.params.id)
    const index = tours.findIndex(t => t.id === id)

    if(index === -1){
        return res.status(404).json({ message: "Tour not found" });
    }

    tours[index] = { ...tours[index], ...req.body };
  res.json({ message: "Tour updated", tour: tours[index] });
})

// Delete Method!
app.delete('/tours/:id',(req,res) => {
    const id = parseInt(req.params.id)
    tours = tours.filter(t => t.id !== id)
     res.json({ message: "Tour deleted" });
})
app.listen(3000,(req,res) => {
    console.log('Server Has Starting!')
})