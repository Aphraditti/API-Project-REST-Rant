const router = require('express').Router()

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://media.istockphoto.com/id/488572323/photo/beautiful-night-scene-of-thailand.jpg?s=612x612&w=0&k=20&c=b3VMlxw7af-iYV8lkr85L7xMcvbnIam-wGUO7yMB99k='
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }]

router.get('/', (req, res) => {

      //Added
      res.render('./places/index', {places});
        
    })

    router.get('/new', (req, res) => {
      res.render('./places/new')
    })

module.exports = router
