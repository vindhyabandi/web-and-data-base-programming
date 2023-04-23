const users = [
  {
    userName: "Tony Stark",
    password: "icecream"
  },
  {
    userName: "Captain America",
    password: "badpassword"
  },
  {
    userName: "Spider-man",
    password: "incorrect"
  },
  {
    userName: "UppalBaal",
    password: "potatopancake"
  }
];

let getUsers = () => users;
module.exports = { getUsers };
