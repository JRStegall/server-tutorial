
import express from 'express';
const app = express();
import { v2 as cloudinary } from 'cloudinary';
import { json, urlencoded } from 'body-parser';

//BODY PARSER CONFIG
app.use(json());
app.use(urlencoded({ extended: true }));

//CLOUDINARY CONFIG
cloudinary.config({
    cloud_name: 'dlrpyxua6',
    api_key: '445588491557849',
    api_secret: 'ckuXwEbEDaVBffGEgkAoIErde4c',
});

app.get("/", (request, response) => {
    response.json({ message: 'Hey ,dude!  This is your server response!  Good on you!' })
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



export default app;