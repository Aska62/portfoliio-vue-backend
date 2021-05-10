import db from "../config/database.js";

export const getArticles = (result) => {
  db.query("SELECT * FROM articles", (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}