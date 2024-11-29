const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');
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

router.post('/add/user' , (req,res)=>{
    usercontroller.addUser(req,res);
})
router.get('/users', (req,res)=>{
    usercontroller.getUsers(req,res);
})



module.exports = router