const pool = require('../config/database');

exports.createUser = (username, email, hashedPassword) => {
  return pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
    [username, email, hashedPassword]
  );
};

exports.findByEmail = (email) => {
  return pool.query('SELECT * FROM users WHERE email = $1', [email]);
};
exports.findById = (id) => {
    return pool.query('SELECT id, username, email FROM users WHERE id = $1', [id]);
  };
  

exports.getAllUsers = () => {
  return pool.query('SELECT id, username, email FROM users');
};


exports.updateUser = (id, username, email) => {
  return pool.query(
    'UPDATE users SET username = $1, email = $2 WHERE id = $3',
    [username, email, id]
  );
};
exports.updatePassword = (id, hashedPassword) => {
    return pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, id]);
  };
  

exports.deleteUser = (id) => {
  return pool.query('DELETE FROM users WHERE id = $1', [id]);
};
