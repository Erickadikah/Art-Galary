import express from 'express';
import mongoose, { get } from 'mongoose';
import router from './routes/user-routes.js';
import bodyParser from 'body-parser';
import postRouter from './routes/post-routes.js';
import { getAllPosts } from './controllers/post-controller.js';
import { posts } from './controllers/post-controller.js';
import { addPost } from './controllers/post-controller.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(bodyParser.json());
// app.use("/api/posts", getAllPosts);
// app.use("/api/post", posts);
// app.use("/api/add", addPost);
app.use( postRouter);


// Connect to MongoDB
mongoose.connect('mongodb+srv://erickadikah2030:7IxsoEWfMRZTrtGC@cluster0.po22n0u.mongodb.net/ArtGalary'
).then(() => app.listen(5000)).then(() => console.log('Connected to database')
).catch(err => console.log(err));

///7IxsoEWfMRZTrtGC