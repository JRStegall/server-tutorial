const express = require('express');
const app = express();
app.get(("/", request, response) => {
    response.json({ message: 'Hey ,dude!  This is your server response!  Good on you!' })
});
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'dlrpyxua6',
    api_key: '445588491557849',
    api_secret: 'ckuXwEbEDaVBffGEgkAoIErde4c',
});

api.post("/upload-image", (request, response) => {

});

module.exports = app;