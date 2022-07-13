const express = require('express');

const controllers = require('./controllers/index');
const middlewares = require('./middlewares/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/ping', controllers.user);
app.post('/login', controllers.login);
app.get('/users/me', middlewares.auth, controllers.me);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));