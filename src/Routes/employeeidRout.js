import express from "express";
import { saveEmployeeId ,getAllEmployeeIds} from "../Controllers/employeeidController.js";

const router = express.Router();

// POST route to save user ID
router.post("/employee-id", saveEmployeeId);

// GET route to fetch all user IDs
router.get("/employee-ids", getAllEmployeeIds);

export default router;
