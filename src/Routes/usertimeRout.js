import express from "express";
import { createUserTicket } from "../Controllers/usertimeController.js"

const router = express.Router();

// POST route to create a new ticket
router.post("/tickets", createUserTicket);

export default router;
