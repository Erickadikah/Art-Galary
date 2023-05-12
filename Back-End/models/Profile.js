import  mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
    myFile: String,
});

export default mongoose.models.profile || mongoose.model('Profile', profileSchema);