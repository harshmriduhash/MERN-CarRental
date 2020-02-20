require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const handle = require('./handlers');
const routes = require('./routes');

app.get('/', (req, res) => res.json({
  hello: 'world'
}));
app.use('/api/car', routes.car)
app.use(handle.notFound);
app.use(handle.errors);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));