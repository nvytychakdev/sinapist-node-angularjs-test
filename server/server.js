// Imports
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');


const router = require('./routing');

// Server configurations
const config = require('./config/config.json');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// REST
app.use('/', router);

app.listen(config.port, () => {
  console.log(`Server started on ${config.port} port`);
});