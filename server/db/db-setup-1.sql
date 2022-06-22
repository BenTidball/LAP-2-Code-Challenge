DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    post_id serial PRIMARY KEY,
    post_title VARCHAR(25) NOT NULL,
    post_body VARCHAR(250) NOT NULL,
    post_sign VARCHAR(25) NOT NULL
)

