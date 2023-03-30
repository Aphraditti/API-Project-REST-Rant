module.exports = [
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai_food.avif'
    },
    {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding_cafe.avif'
    }
]
const mongoose = require('mongoose')

const place_schema = new mongoose.Schema({
    name:     { type: String, required: true },
    pic:      { type: String, default: '/images/default_food.jpg' },
    cuisines: { type: String, required: true },
    city:     { type: String, default: 'Anytown' },
    state:    { type: String, default: 'USA' },
    founder:  Number,
})

module.exports = mongoose.model('place_schema', place_schema)

// DELETE THIS!
// -------------------
// module.exports = [
//     {
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: '/images/thai_food.avif'
//     },
//     {
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: '/images/coding_cafe.avif'
//     }








// const router = require('express').Router()
// const places = require('../models/places.js')

// router.get('/', (req, res) => {
//   //Added
//   res.render('./places/index', {places});  
// })

// router.get('/new', (req, res) => {
//   res.render('./places/new')
// })

// router.post('/', (req, res) => {
//   console.log(req.body);
//   if (!req.body.pic) {
//     req.body.pic = 'https://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id]})
//   }
// })
// module.exports = router
