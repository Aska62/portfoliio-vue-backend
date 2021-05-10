import {getArticles} from "../models/articlesModel.js";

export const showArticles = (req, res) => {
  getArticles((err, results) => {
    if(err){
      res.send(err);
    } else {
      res.json(results);
    }
  });
};