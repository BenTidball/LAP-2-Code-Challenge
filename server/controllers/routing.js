const router = require('express').Router();
const Post = require('../models/post');

//retrieve all posts in the database
router.get('/all', async (req, res) =>{
    try {
        const postsData = await Post.getPosts();
        res.json(postsData);
    } catch (err) {
        res.status(404).send({ err });
    }
})

//get post from database by its ID
router.get('/:id', async (req, res) =>{
    try {
        const postData = await Post.getPostsById(req.body.post_id);
        res.json(postData);
    } catch (err) {
        res.status(404).send({ err });
    }
})

//create a new post instance
router.post('/create', async (req, res) =>{
    try {
        const postData = await Post.createPost(req.body);
        res.status(201).send(postData);
    } catch (err) {
        res.status(404).send(err);
    }
})

//testing the post function
// const testPost = {post_title: "Test post", post_body: "Test body", post_sign: "Test"};
// Post.createPost(testPost);

module.exports = router;