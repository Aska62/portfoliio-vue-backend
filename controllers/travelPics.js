import {getTravelPics} from "../models/travelPicsModel.js";

export const showTravelPics = (req, res) => {
  getTravelPics((err, results) => {
    if(err){
      res.send(err);
    } else {
      res.json(results);
    }
  });
};