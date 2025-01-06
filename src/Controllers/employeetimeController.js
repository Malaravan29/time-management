import UserTickets from "../Models/employeetimeModel.js";

// Function to create a new user ticket
export const createUserTicket = async (req, res) => {
  try {
    const { employeeId, date, entries } = req.body;

    // Validate request body
    if (!employeeId || !date || !entries || !Array.isArray(entries)) {
      return res.status(400).json({ error: "Invalid data provided." });
    }

    // Check if a ticket already exists for the given employeeId and date
    const existingTicket = await UserTickets.findOne({ employeeId, date });

    if (existingTicket) {
      // Update the existing ticket by merging new entries with existing ones
      // existingTicket.entries = [...existingTicket.entries, ...entries];

      // Update the existing ticket's entries with the new entries
      existingTicket.entries = entries;
      
      const updatedTicket = await existingTicket.save();
      return res.status(200).json(updatedTicket);
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
    res
      .status(500)
      .json({ error: "An error occurred while creating the ticket." });
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
