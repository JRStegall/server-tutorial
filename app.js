const express = require('express');
const app = express();
app.use((request, response) => {
    response.json({ message: 'Hey ,dude!  This is your server response!  Good on you!' })
});
module.exports = app;