const store = require('./store');
const DateSQL = require('../config/DateSQL');

function addMessage(user, message) {
  return new Promise(async(resolve, reject) => {
    if (!user || !message) {
      return reject('Not all arguments were given');
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new DateSQL().getDate,
    };

    const affectedArrows = await store.add(fullMessage);
    if (affectedArrows > 0) {
      resolve(fullMessage);
    } else {
      reject('Error while saving data');
    }

  });

}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addMessage,
  getMessages,
};
