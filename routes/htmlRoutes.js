// DEPENDENCIES
const path = require('path');

// ROUTING
module.exports = (app) => {

    // notes page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });    
    
    //  home page
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}