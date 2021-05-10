import {getVideos} from "../models/videosModel.js";

export const showVideos = (req, res) => {
  getVideos((err, results) => {
    if(err){
      res.send(err);
    } else {
      res.json(results);
    }
  });
};