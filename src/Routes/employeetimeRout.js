import express from "express";
import { createUserTicket } from "../Controllers/employeetimeController.js"

const router = express.Router();

// POST route to create a new ticket
router.post("/ticketsdata", createUserTicket);

export default router;
