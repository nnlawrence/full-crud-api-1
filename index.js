// Require Packages
const express = require('express');
const cors = require('cors');

// Require Controllers
const ctrl = require('./controllers/crudOperations');
const swapiCtrl = require('./controllers/httpOperations');

// Create The Server Instance
const app = express();

// Top Level Middleware to Parse JSON to JS
app.use(express.json());
app.use(cors());

// End Points
app.get('/users', ctrl.getUsers);
app.get('/user/:id', ctrl.getUserByParam)
app.get('/user', ctrl.getUserByQuery)
app.post('/user', ctrl.createNewUser);
app.put('/users/:id', ctrl.updateUser)
app.delete('/users/:id', ctrl.deleteUser)

app.get('/swapi/users/:page', swapiCtrl.getSwapiCharacters)

// Get Server Listening
app.listen(8080, () => console.log('server running yo! ☠︎'))