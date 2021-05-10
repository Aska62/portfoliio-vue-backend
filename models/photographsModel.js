import db from "../config/database.js";

export const getPhotographs = (result) => {
  db.query("SELECT * FROM capture_imgs", (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}