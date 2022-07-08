
const express = require('express');
const app = express();
const cloudinary = require('cloudinary').v2
const bodyParser = require('body-parser');
require('dotenv').config();

//BODY PARSER CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CLOUDINARY CONFIG
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.get("/", (request, response) => {
    response.json({ message: 'Hey ,dude!  This is your server response!  Good on you!' });
    next();
});

//IMAGE UPLOAD API
app.post("/upload-image", (request, response) => {
    //COLLECT IMAGE FROM USER
    const data = {
     image: request.body.image,
    }
    //UPLOAD IMAGE HERE
    cloudinary.uploader.upload(data.image)
        .then((result) => {
            response.status(200).send({
                message: "success",
                result,
            });
        }).catch((error) => {
            response.status(500).send({
                message: "failure",
                error,
            });
        });
});



module.exports = app;