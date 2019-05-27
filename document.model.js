const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
    title: String,
    filetype: String,
    abstract: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('document', DocumentSchema);