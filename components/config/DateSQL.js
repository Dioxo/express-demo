module.exports = class DateSQL{
  constructor() {
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }
  get getDate() {
    return this.date;
  }
};
