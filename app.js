const express = require('express');
const app = express();
const cloudinary = require('cloudinary').v2
const bodyParser = require('body-parser');

//BODY PARSER CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CLOUDINARY CONFIG
cloudinary.config({
    cloud_name: 'dlrpyxua6',
    api_key: '445588491557849',
    api_secret: 'ckuXwEbEDaVBffGEgkAoIErde4c',
});

app.get(("/", request, response) => {
    response.json({ message: 'Hey ,dude!  This is your server response!  Good on you!' })
});

api.post("/upload-image", (request, response) => {
    const data = {
     image: request.body.image,
    }
    cloudinary.uploader.upload(data.image);
});





module.exports = app;