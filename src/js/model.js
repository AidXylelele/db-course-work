const { pool } = require("./pool");

class Model {
  static dbHandler = (sql) => {
    return new Promise((resolve) => {
      pool.connect(function(err) {
        if (err) throw err;
        return pool.query(sql, (err, result) => {
          if (err) throw err;
          resolve(result);
        });
      });
    });
  };
  static getQuestionById = ({ id }) => {
    const sql = `SELECT * FROM mydb.question WHERE id = ${id}`;
    return this.dbHandler(sql);
  };
  static getAllQuestions = () => {
    const sql = `SELECT * from mydb.question`;
    return this.dbHandler(sql);
  };
  static postQuestion = ({ id, type, text, quiz_id, topic }) => {
    const sql = `INSERT INTO mydb.question (id, type, text, quiz_id, topic) VALUES (${id},\"${type}\", \"${text}\", ${quiz_id}, \"${topic}\")`;
    return this.dbHandler(sql);
  };
  static deleteQuestionById = ({ id }) => {
    const sql = `DELETE FROM mydb.question WHERE id = ${id}`;
    return this.dbHandler(sql).then(
      () => `Question with id: ${id} was deleted!`
    );
  };
  static updateQuestionById = ({ id }, { type, text, quiz_id, topic }) => {
    const sql = `UPDATE mydb.question SET type = \"${type}\", text = \"${text}\", quiz_id = \"${quiz_id}\", topic = \"${topic}\" WHERE id = ${id} `;
    return this.dbHandler(sql);
  };
}

module.exports = Model;
