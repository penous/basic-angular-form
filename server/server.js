const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const PORT = 9000;

mongoose.connect(
  'mongodb+srv://penous:penous@becode.v7mmb.mongodb.net/friendBook',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB cluster');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  next();
});

// * Create schema for mongoose models
const friendSchema = new mongoose.Schema({
  firstName: 'string',
  lastName: 'string',
  email: 'string',
  phoneNumber: 'string',
  language: 'string',
});

// * Create mongoose models
const Friend = mongoose.model('Friend', friendSchema, 'friends');

let allFriends = [
  {
    firstName: 'Coach',
    lastName: 'Tim',
    email: 'tim.broos@becode.org',
    phoneNumber: '0469420666',
    language: 'Js',
  },
];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
  response.send('Hello from server');
});

app.get('/allFriends', (request, response) => {
  Friend.find((err, friends) => {
    if (err) console.log(err);
    console.log(friends);
    response.send(friends);
  });
});

app.post('/', function (request, response) {
  response.status(200).send({ message: 'Data received' });
});

app.post('/addFriend', (request, response) => {
  // Create friend and add to mongodb cluster
  const friend = new Friend({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    phoneNumber: request.body.phoneNumber,
    language: request.body.language,
  });
  friend.save((err, friend) => {
    if (err) console.log(err);
    console.log(friend);
  });

  allFriends[allFriends.length] = request.body;
  response.status(200).send({ message: 'Friend added' });
});

app.listen(PORT, function () {
  console.log(`Running on port ${PORT}...`);
});
