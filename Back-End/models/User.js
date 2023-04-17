import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchemer = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        minimum: 6
    },
    posts: [ {type: mongoose.Types.ObjectId, ref: 'Post', required: true}]
});

export default mongoose.model('User', UserSchemer);
//stored in the database as users
// Compare this snippet from landing-page/Back-End/models/User.js: