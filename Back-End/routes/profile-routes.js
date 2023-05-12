import { Express } from "express";
import { ProfileImage } from "models/profile.js"
import axios from 'axos'


app.use(cors());
const router = express.Router();
router.post("/uploads", ProfileImage)