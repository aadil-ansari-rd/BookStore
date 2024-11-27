const Book = require('../models/Book')
const cloudinary = require('cloudinary');
async function addBook(req, res) {
    try {
        cloudinary.config({
            cloud_name: "dln7svzdo",
            api_key: "776616335115449",
            api_secret: "IFjZ6HTYGa1plOJB1xoObAE-fgc"
        })
        let book = new Book(req.body);

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            book.bookImage = result.secure_url;
        }
        await book.save();
        let books = await Book.find({});
        res.status(200).send({ success: true, message: 'Data sent sucessfully', books: books });
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ success: false, message: 'something went wrong ... ' });
    }
}
async function getBooks(req, res) {
    try {
        //console.log(req.query, 'req.query')  //req.query is used  mainly for search bar
        let pageNo = parseInt(req.query.pageNo)
        let limit = parseInt(req.query.limit)
        let sk = (pageNo - 1) * limit;
        let totalCounts = await Book.countDocuments({})
        let books = await Book.find({ bookName: new RegExp(req.query.search, "i") }).skip(sk).limit(limit)
        res.status(200).send({ success: true, data: books, totalCounts: totalCounts });
    } catch (err) {
        console.log(err);
        res.status(400).send({ success: false });
    }
}
async function getBook(req, res) {
    try {
        let id = req.params.id;
        let book = await Book.findOne({ _id: id })
        // console.log(book, 'book');
        // console.log("le gayi book")
        res.status(200).send({ success: true, data: book });
    } catch (err) {
        console.log(err);
        res.status(200).send({ success: false });
    }
}
async function editBook(req, res) {
    try {
        console.log(req.file)
        let id = req.params.id;
        let book = await Book.findOne({ _id: id })
        cloudinary.config({
            cloud_name: "dln7svzdo",
            api_key: "776616335115449",
            api_secret: "IFjZ6HTYGa1plOJB1xoObAE-fgc"
        })
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            book.bookImage = result.secure_url;
        }
        book.bookName = req.body.bookName;
        book.authorName = req.body.authorName;
        book.language = req.body.language;
        book.shortDescription = req.body.shortDescription;
        book.description = req.body.description;
        book.price = req.body.price;
        book.bookStatus = req.body.bookStatus;
        book.quantity = req.body.quantity;
        book.publisher = req.body.publisher;
        book.isbnNo = req.body.isbnNo;
        await book.save();
        res.status(200).send({ success: true });

    } catch (err) {
        console.log(err)
        res.status(400).send({ success: false });
    }
}
async function deleteBook(req, res) {
    try {
        let id = req.params.id;
        await Book.deleteOne({ _id: id })
        let books = await Book.find({});
        res.status(200).send({ success: true, data: books })
    } catch (err) {
        console.log(err);
        res.status(400).send({ success: false });
    }
}
module.exports = {
    addBook,
    getBooks,
    getBook,
    editBook,
    deleteBook
}