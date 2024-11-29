const User = require("../models/User");
const cloudinary = require("cloudinary");

async function addUser(req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(400).send({ success: false, message: "User already exist" });
    } else {
      user = new User(req.body);
      await user.save();
      res.status(200).send({ success: true });
    }
  } catch (err) {
    res.status(400).send({ success: false });
    console.log(err.message);
  }
}
async function getUsers(req, res) {
  try {
    let pageNo = parseInt(req.query.pageNo);
    let limit = parseInt(req.query.limit);
    let sk = (pageNo - 1) * limit;
    let totalCounts = await User.countDocuments({});
    let users = await User.find({
      firstName: new RegExp(req.query.search, "i"),
    })
      .skip(sk)
      .limit(limit);
    res
      .status(200)
      .send({ success: true, data: users, totalCounts: totalCounts });
  } catch (err) {
    console.log(err);
    res.status(400).send({ success: false });
  }
}

module.exports = {
  addUser,
  getUsers,
};
