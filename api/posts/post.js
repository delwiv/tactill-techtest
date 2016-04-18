import mongoose, { ObjectId } from 'mongoose';

const Post = mongoose.Schema({
    title: String,
    slug: String,
    Author: {
        type: ObjectId,
        ref: 'Author'
    },
    body: String,
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    tags: [{
        type: String
    }],
    image: String,
    comments: [{
        type: ObjectId,
        ref: 'Comment'
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
    collection: 'posts'
});

export default mongoose.model('Post', Post);
