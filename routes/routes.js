import express from "express";

import {showArticles} from "../controllers/articles.js";
import {showVideos} from "../controllers/videos.js";
import {showPhotographs} from "../controllers/photographs.js";
import {showTravelPics} from "../controllers/travelPics.js";

const router = express.Router();

router.get('/articles', showArticles);
router.get('/videos', showVideos);
router.get('/photographs', showPhotographs);
router.get('/travelPics', showTravelPics);

export default router;