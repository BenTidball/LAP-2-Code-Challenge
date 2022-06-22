DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    post_id int PRIMARY KEY,
    post_header CHAR(25),
    post_body CHAR(250)
)

