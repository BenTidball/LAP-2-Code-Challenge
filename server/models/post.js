const db = require('../dbinit');

//pass sql data through class constructor to create array containing json like data
class Post{
    constructor(data){
        this.post_title = data.post_title;
        this.post_body = data.post_body;
    }
    
    //retrive all posts
    static async getPosts(){
        try{
            const posts = await db.query('SELECT * FROM posts;');
            return posts.rows.map(data => new Post(data));
        }catch(err){
            console.error(err);
        }
    }

    //retrive posts by its id
    static async getPostsById(id){
        try{
            const posts = await db.query(`SELECT * FROM posts WHERE post_id = ${id};`);
            return posts.rows.map(data => new Post(data));
        }catch(err){
            console.error(err);
        }
    }

    //add a new post to database
    static async createPost(data){
        try{
            const posts = await db.query(`INSERT INTO posts ("post_title", "post_body") 
                                            VALUES(${data.post_title}, ${data.post_body}) RETURNING *;`);
            return posts.rows.map(data => new Post(data));
        }catch(err){
            console.error(err);
        }
    }
}



module.exports = Post ;