const router = require('express').Router();
const Post = require('../models/post');

//retrieve all posts in the database
router.get('/all', async (req, res) =>{
    try {
        const posts = await Post.getPosts();
        res.json(posts);
    } catch (err) {
        res.status(404).send({ err });
    }
})

//get post from database by its ID
router.get('/:id', async (req, res) =>{
    try {
        const posts = await Post.getPostsById(req.body.post_id);
        res.json(posts);
    } catch (err) {
        res.status(404).send({ err });
    }
})

//create a new post instance
router.post('/create', async (req, res) =>{
    try {
        const posts = await Post.createPost(req.body);
        res.json(posts);
    } catch (err) {
        res.status(404).send({ err });
    }
})


module.exports = router;