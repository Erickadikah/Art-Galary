import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
      type: mongoose.Types.ObjectId, //getting the id of the user
      ref: 'User', //referring to the user model
      required: true,
      
    },
});

export default mongoose.model('Post', postSchema);
