import db from "../config/database.js";

export const getTravelPics = (result) => {
  db.query("SELECT * FROM travel_imgs", (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}