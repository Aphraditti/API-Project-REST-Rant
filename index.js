require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express')

const app = express();

const port = process.env.PORT;
const mongoURL = process.env.MONGO_DB_URI;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Server running on ${port}`)
  mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => console.log('Connected!'));
}
)

app.get('/', (req, res) => {
  res.render('./home')
})

app.get('/places', (req, res) => {
  res.render('./places/index')
})
app.get('/places/new', (req, res) => {
  res.render('./places/new')
})


