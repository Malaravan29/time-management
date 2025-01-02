import UserId from "../Models/useridModel.js";

// Controller to save user IDs
export const saveUserId = async (req, res) => {
  try {
    const { userId } = req.body;

    // Validate input
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    // Check if the userId already exists
    const existingUser = await UserId.findOne({ userId });
    if (existingUser) {
      return res.status(409).json({ error: "User ID already exists." });
    }

    // Create and save a new UserId document
    const newUserId = new UserId({ userId });
    const savedUserId = await newUserId.save();

    res.status(201).json({ message: "User ID saved successfully.", data: savedUserId });
  } catch (error) {
    console.error("Error saving User ID:", error);
    res.status(500).json({ error: "An error occurred while saving the User ID." });
  }
};


// Controller to fetch all user IDs
export const getAllUserIds = async (req, res) => {
    try {
      // Fetch all user IDs from the database
      const userIds = await UserId.find({}, "userId"); // Only return userId field
  
      if (userIds.length === 0) {
        return res.status(404).json({ message: "No user IDs found." });
      }
  
      res.status(200).json({ data: userIds });
    } catch (error) {
      console.error("Error fetching user IDs:", error);
      res.status(500).json({ error: "An error occurred while fetching user IDs." });
    }
  };