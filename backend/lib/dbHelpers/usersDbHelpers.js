const generateToken = '../../auth/generateToken.js'
const registerUser = function(db,user) {
 return db
    .query(`INSERT INTO users(first_name, last_name,email, password) values($1,$2,$3,$4);`, [
      user.first_name,
      user.last_name,
      user.email,
      user.password,
    ])
    .then((res) => {
      return res.rows[0];
    });
};

const getAllUsers = function(db) {
  return db.query(`SELECT * FROM users`)
    .then((res) => {
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
const getUserByEmail = function(email, db) {
  return db.query(`SELECT * FROM users WHERE email =$1`, [email])
    .then((res) => {
      return res.rows[0];
    }).catch(err => {
      console.log(err);
    });
};
module.exports = { registerUser,getAllUsers, getUserByEmail };