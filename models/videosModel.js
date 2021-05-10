import db from "../config/database.js";

export const getVideos = (result) => {
  db.query("SELECT * FROM videos", (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}