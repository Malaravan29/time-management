import express from "express";
import { saveUserId ,getAllUserIds} from "../Controllers/useridController.js";

const router = express.Router();

// POST route to save user ID
router.post("/user-id", saveUserId);

// GET route to fetch all user IDs
router.get("/user-ids", getAllUserIds);

export default router;
