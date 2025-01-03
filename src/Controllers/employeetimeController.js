import UserTickets from "../Models/employeetimeModel.js";

// Function to create a new user ticket
export const createUserTicket = async (req, res) => {
  try {
    const { employeeId, date, entries } = req.body;

    // Validate request body
    if (!employeeId || !date || !entries || !Array.isArray(entries)) {
      return res.status(400).json({ error: "Invalid data provided." });
    }

    // Create a new UserTickets document
    const newTicket = new UserTickets({
      employeeId,
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

// Function to get all user tickets
export const getUserTickets = async (req, res) => {
  const { date } = req.query;

  let filter = {};
  if (date) {
    // Convert date string to Date object for proper comparison
    filter.date = { $eq: new Date(date) }; // Ensure the date passed is in YYYY-MM-DD format
  }

  try {
    const tickets = await UserTickets.find(filter); // Assuming Ticket is your model
    res.json(tickets);
  } catch (error) {
    res.status(500).send('Error fetching tickets');
  }
};
