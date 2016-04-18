import mongoose from 'mongoose';

const Category = mongoose.Schema({
    title: String,
    desc: String,
    icon: String
}, {
    strict: true,
    collection: 'categories'
});

export default mongoose.model('Category', Category);
