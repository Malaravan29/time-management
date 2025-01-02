import UserTickets from "../Models/usertimeModel.js";

export const createUserTicket = async (req, res) => {
  try {
    const { userId, date, entries } = req.body;

    // Validate request body
    if (!userId || !date || !entries || !Array.isArray(entries)) {
      return res.status(400).json({ error: "Invalid data provided." });
    }

    // Create a new UserTickets document
    const newTicket = new UserTickets({
      userId,
      date,
      entries,
    });

    // Save to the database
    const savedTicket = await newTicket.save();

    // Respond with the saved document
    res.status(201).json(savedTicket);
  } catch (error) {
    console.error("Error creating user ticket:", error);
    res.status(500).json({ error: "An error occurred while creating the ticket." });
  }
};
