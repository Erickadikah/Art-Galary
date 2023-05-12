import express from 'express';
import mongoose, { get } from 'mongoose';
import router from './routes/user-routes.js';
import bodyParser from 'body-parser';
import postRouter from './routes/post-routes.js';
import { getAllPosts, uploadFile } from './controllers/post-controller.js';
import { posts } from './controllers/post-controller.js';
import { addPost } from './controllers/post-controller.js';
import cors from 'cors';

import profile from './models/Profile.js';

// import multer from 'multer';
const app = express();
app.get('/', (req, res) => {
    try {
        profile.find({}).then(data => {
            res.json(data);
        }).catch(error => {
            res.json({error});
        })
        }catch(error){
            res.json({msg : error.message});
        }
});


app.post('/aploads', async (req, res) => {
    const body = req.body;
    try {
        const newImage = await profile.create(body)
        newImage.save();
        res.status(200).json( {msg : "new Image uploaded"});
    }catch(error){
        res.status(409).json({msg : error.message});
    }
});


app.use(cors());
app.use(express.json());
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( postRouter);


// Connect to MongoDB
mongoose.connect('mongodb+srv://erickadikah2030:7IxsoEWfMRZTrtGC@cluster0.po22n0u.mongodb.net/ArtGalary'
).then(() => app.listen(5000)).then(() => console.log('Connected to database')
).catch(err => console.log(err));

//multer storage changeble
// const Storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: Storage,
// }).single("profilePicture");

// app.post("/upload", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       let newImage = new Image({
//         name: req.body.name,
//         profilePicture: {
//           data:req.file.filename,
//           contentType: "image/png",
//         },
//       });
//       newImage.save().then(() => res.send("Successfully uploaded")).catch(err => console.log(err));
//     }
//   });
// });


///7IxsoEWfMRZTrtGC //mongo atlas key