const con = require("./db_connect");

async function createTable(){
  let sql = `CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    user_fname VARCHAR(255),
    user_lname VARCHAR(255),
    user_email VARCHAR(255),
    password VARCHAR(255),
    CONSTRAINT userPK PRIMARY KEY(userID)
    );`
    await con.query(sql);
}

createTable();

async function getUser(user) {
  let sql;

  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE username = "${user.username}"
  `;
  }
  return await con.query(sql);  
}

async function userExists(username) {
  const sql = `SELECT * FROM users
    WHERE username = "${username}" 
  `;
  let u = await con.query(sql);
  console.log(u);
  return u;
}


async function login(user) {
  const currentuser = await getUser(user);
  if(!currentuser[0]) throw Error('User not found');
  if(currentuser[0].password !== user.password) throw Error('Password is incorrect.');

  return currentuser[0];
}

async function register(user){
  const u = userExists(user.username);
  if(u.length>0) throw Error('Username already exists')

  const sql = `INSERT INTO users (username, password, user_fname, user_lname, user_email)
    VALUES ( "${user.username}", "${user.password}", "${user.fname}", "${user.lname}", "${user.email}" 
    )`;

  const insert = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];  
}

async function deleteUser(userId) {
    const sql = `DELETE FROM users
      WHERE userId = ${userId}
    `;
    await con.query(sql);
}

async function editUser(user) {
  let sql = `UPDATE users 
    SET username = "${user.username}"
    WHERE userID = ${user.userID}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

async function getAllUsers() {
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users)
}
  

module.exports = { getUser, getAllUsers, login, register, editUser, deleteUser,userExists};

/*
const users = [
  {
    userName: "cathy123",
    password: "icecream",
  },
  {
    userName: "fredburger",
    password: "badpassword"
  },
  {
    userName: "bobbyjones",
    password: "incorrect"
  },
  {
    userName: "UppalBaal",
    password: "potatopancake"
  }
];
let getUsers = () => users;
module.exports = { getUsers };
*/