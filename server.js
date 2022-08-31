'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const weather = require('./routes/weatherRoute')

app.use(weather)

app.listen(process.env.PORT, () => console.log(`Server up on ${process.env.PORT}`));