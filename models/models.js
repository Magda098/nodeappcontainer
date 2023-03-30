const express=require('express');
const router =express.Router();
module.exportconst mongoose = require('mongoose');

// Schema
const photosSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    stadium: {
        required: true,
        type: String,
    },
    stadiumCapacity: {
        required: false,
        type: Number,
    },
});

module.exports = mongoose.model('photos', teamSchema);