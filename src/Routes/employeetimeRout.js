import express from "express";
import { createUserTicket,getUserTickets} from "../Controllers/employeetimeController.js"

const router = express.Router();

// POST route to create a new ticket
router.post("/ticketsdata", createUserTicket);

// Route to get all user tickets
router.get("/user-tickets", getUserTickets);

export default router;
