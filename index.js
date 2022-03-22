const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./middleWares/getTalkers');
const getTalkerById = require('./middleWares/getTalkerById');
const emailValidation = require('./middleWares/emailValidation');
const passwordValidation = require('./middleWares/passwordValidation');
const login = require('./middleWares/login');
const {
    tokenValidation,
    nameValidation,
    ageValidation,
    talkerValidation,
  formatValidation } = require('./middleWares/registrationValidation');
const newTalker = require('./middleWares/newTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getTalkers);

app.get('/talker/:id', getTalkerById);

app.post('/login', emailValidation, passwordValidation, login);

app.post('/talker',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkerValidation,
  formatValidation,
  newTalker);

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
