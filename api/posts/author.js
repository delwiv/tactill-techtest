import mongoose, { ObjectId } from 'mongoose';

const Author = mongoose.Schema({
    name: String,
    website: String,
    profile_picture: String,
    bio: String,
    entries: [{
        type: ObjectId,
        ref: 'Post'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    strict: true,
    collection: 'authors'
});

export default mongoose.model('Author', Author);
