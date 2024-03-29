require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express')
const methodOverride = require('method-override')

const app = express();

const port = process.env.PORT;
const mongoURL = process.env.MONGO_URI;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/places', require('./controllers/places'))

app.listen(port, () => {
  console.log(`Server running on ${port}`)
  mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => console.log('Connected!'));
}
)

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

