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
    rateValidation,
    watchedAtValidation,
} = require('./middleWares/registrationValidation');
const newTalker = require('./middleWares/newTalker');
const editedTalker = require('./middleWares/editTalker');
const deleteTalker = require('./middleWares/deleteTalker');

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
  watchedAtValidation,
  rateValidation,
  newTalker);

app.put('/talker/:id',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkerValidation,
  watchedAtValidation,
  rateValidation,
  editedTalker);

app.delete('/talker/:id', tokenValidation, deleteTalker);

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
