// DEPENDENCIES
const express = require('express');

// EXPRESS 
const app = express();

// PORT 
const PORT = process.env.PORT || 8080;

// DATA PARSING 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// middleware function 
app.use(express.static('public'));

// ROUTER 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});