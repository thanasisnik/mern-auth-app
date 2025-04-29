const express = require('express');
const app = express();
const cors = require('cors');
const user = require('./routes/user.routes');
const auth = require('./routes/auth.routes');

app.use(express.json());
app.use(cors());
app.use('/api/users', user);

app.use('/api/auth', auth);

module.exports = app;