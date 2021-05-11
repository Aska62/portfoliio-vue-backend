import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!!!`);
});

var firebaseConfig = {
  apiKey: process.env.NODE_APP_API_KEY,
  authDomain: process.env.NODE_APP_AUTH_DOMAIN,
  projectId: process.env.NODE_APP_PROJECT_ID,
  storageBucket: process.env.NODE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.NODE_APP_MESSAGEING_SENDER_ID,
  appId: process.env.NODE_APP_APP_ID,
  measurementId: process.env.NODE_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);