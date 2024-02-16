const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('public'));

// Separate Routes
const noteApiRoutes = require('./routes/notes-api');

// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/notes', noteApiRoutes);

app.get('/', (req, res) => {
 res.send('Welcome to the back end! 😃');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}! 😃`));
