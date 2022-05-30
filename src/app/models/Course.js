const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, default: '', maxLength: 100 },
        slug: { type: String, slug: 'name', unique: true },
        description: { type: String, default: '', maxLength: 100 },
        image: { type: String, default: '', maxLength: 100 },
        videoId: { type: String, default: '', maxLength: 100 },
        level: { type: String, default: '', maxLength: 100 },
        deletedAt: { },
    },
    { timestamps: true },
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
