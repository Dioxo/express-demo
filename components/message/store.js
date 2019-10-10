const db = require('../config/db_connect');
let connection;
db().then(conn => {
  connection = conn;
}).catch(e => {
  console.log(e);
});

async function addMessage(fullMessage) {
  if (connection) {
    let sql = 'INSERT INTO message(user,message,date) VALUES (?,?,?)';
    try {
      const res = await connection.query(sql,
                      [fullMessage.user,fullMessage.message,fullMessage.date,],
                                        );

      return res.affectedRows;
    } catch (e) {
      return e;
    }

  }

}

async function getMessages() {
  if (connection) {
    let sql = 'SELECT * FROM message';
    try {
      const res = await connection.query(sql,[]);
      return res;
    } catch (e) {
      return e;
    }
  }
}

module.exports = {
  add: addMessage,
  list: getMessages,
  // Get, update, delete
};
