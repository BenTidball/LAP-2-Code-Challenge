# LAP-2-Code-Challenge
 - Your app should have a browser client allowing users to write a post with a title, a pseudonym and a body
 - No login should be required to create a post or visit a post
 - When a user hits 'publish', the post should be stored in a database and the client redirected to a show path
 - The user should be able to access their post using that show path even after a server restart
 - Edit and delete functionality is not required
# Installation and usage
Application and all dependencies is handled and ran on Docker.</br>
Ensure that docker is currently running and type: `docker compose up` within the terminal within the root of the server directory <i>"LAP-2-Code-Challenge/server"</i></br>
You can now expect the client to be working in tandem the server which is now running on port 3000.

# Technologies
- HTML
- JavaScript
- Docker
    - PostgreSQL

# Routes

## Retrieve all posts in the database
Expect: status(200), response(postsData)</br>
`postsData` is a JSON response object
```
router.get('/all', async (req, res) =>{
    //get code block
})
```

## Get post from database by `post_id`
Expect: status(200), request(post_id), response(postsData)</br>
`post_id` is a expected int associated with the posts identity number within the database
`postsData` is a JSON response object
```
router.get('/:id', async (req, res) =>{
    //get code block
})
```

## Create a new post instance</br>
Expect: status(201),  request(createPostData), response(postsData)</br>
`createPostData` is a JSON request object containing the POST data to create a new post in the database containing: </br>
`[{post_title: "title"}, {post_body: "body"}, {post_sign: "signed"}]`  </br>
`postData` is a JSON response object of the returned new database entry
```
router.post('/create', async (req, res) =>{
    //post code block
})
```
