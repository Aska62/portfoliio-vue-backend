import {getPhotographs} from "../models/photographsModel.js";

export const showPhotographs = (req, res) => {
  getPhotographs((err, results) => {
    if(err){
      res.send(err);
    } else {
      res.json(results);
    }
  });
};