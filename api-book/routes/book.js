const express = require('express');
const router = express.Router();
const bookcontroller = require('../controllers/bookcontroller');
const multer = require('multer');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended : false
}));
const uploader = multer({
    storage:multer.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024},
});

router.post('/add/book',  uploader.single("file"), (req,res)=>{
    bookcontroller.addBook(req,res);
})
router.get('/books',(req,res)=>{
    bookcontroller.getBooks(req,res);
})
router.get('/book/:id',(req,res)=>{
    bookcontroller.getBook(req,res)
})
router.put('/edit/book/:id',uploader.single("file") ,(req,res)=>{
    bookcontroller.editBook(req,res)
})
router.delete('/delete/book/:id',(req,res)=>{
    bookcontroller.deleteBook(req,res)
})
module.exports = router;