const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps')
let Schema = mongoose.Schema;
const BookSchema = new Schema({
    bookName : { type : String },
    authorName : { type : String },
    language : { type : String},
    shortDescription : {type : String},
    description : { type : String },
    price : { type : String },
    bookStatus : {type : String},
    quantity : { type : Number},
    publisher : { type : String },
    isbnNo : { type : String },
    bookImage :{type: String } ,
    createdAt : Date,
    updatedAt : Date,
})

BookSchema.plugin(timestamps , {index : true});
module.exports = mongoose.model('Book', BookSchema);

