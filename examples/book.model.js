'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title:String,
    title: {
        type:String,
        required: true,
        unique: true, 
        default: Date.now
    }
    keywords: Array,
    published: Boolean,
    author:{
        type: Schema.ObjectID,
        ref:'User'
    }
})

module.exports = mongoose.model('Book', BookSchema);