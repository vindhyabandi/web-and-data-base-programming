const express = require('express'); 
const Post = require('../models/post');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    const posts = Post.getPosts(); 
    res.send(users);
  } catch (err) {
    res.status(401).send({message: error.message});
  }
});

module.exports = router;