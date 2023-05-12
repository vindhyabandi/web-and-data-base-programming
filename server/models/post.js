const con = require("./db_connect");                // we need this file because we need connection

async function createTable(){
    let sql=`CREATE TABLE if not exists posts(
        postID INT NOT NULL AUTO_INCREMENT,
        post VARCHAR(255) NOT NULL UNIQUE,
        userID INT,
        CONSTRAINT postPK PRIMARY KEY(postID),
        CONSTRAINT FOREIGN KEY (userID) REFERENCES users(userID)
        
    );`
    await con.query(sql);                            // we need await when used async
}
//  
//
createTable();

async function getAllPosts() {
    const sql = `SELECT * FROM posts;`;
    let posts = await con.query(sql);
    console.log(posts)
  }

  async function createPost(post){

    let cPost=await getPost(post);

    const sql=`INSERT INTO posts(post,userID) VALUES ("${post.post}",${post.userID});`
    

    await con.query(sql);
    return cPost[0];
    
}

  async function editPost(post){
    let sql=`update posts SET post="${post.post}" where postID=${post.postID}`;

    await con.query(sql);
    let updatedPost = await getPost(post);

    return updatedPost[0];
}

async function deletePost(post){
    let sql=`Delete from posts where postID=${post.postID}`;

    await con.query(sql);

}


function getAllPosts(){
    return posts;
}

module.exports={getAllPosts,editPost,deletePost,createPost};