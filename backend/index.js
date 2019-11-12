const express = require('express');
const { server } = require('./config.json');

const app = express();

app.listen(server.port, () => console.log('server running'));
