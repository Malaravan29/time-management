import EmployeeIdModel from "../Models/employeeidModel.js";

// Controller to save employee IDs
export const saveEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.body;

    // Validate input
    if (!employeeId) {
      return res.status(400).json({ error: "Employee ID is required." });
    }

    // Check if the employeeId already exists
    const existingEmployee = await EmployeeIdModel.findOne({ employeeId });
    if (existingEmployee) {
      return res.status(409).json({ error: "Employee ID already exists." });
    }

    // Create and save a new employeeId document
    const newEmployeeId = new EmployeeIdModel({ employeeId });
    const savedEmployeeId = await newEmployeeId.save();

    res.status(201).json({ message: "Employee ID saved successfully.", data: savedEmployeeId });
  } catch (error) {
    console.error("Error saving employee ID:", error);
    res.status(500).json({ error: "An error occurred while saving the Employee ID." });
  }
};



// Controller to fetch all employee IDs
export const getAllEmployeeIds = async (req, res) => {
  try {
    // Fetch all employee IDs from the database
    const employeeIds = await EmployeeIdModel.find({}, "employeeId"); // Only return employeeId field

    if (employeeIds.length === 0) {
      return res.status(404).json({ message: "No employee IDs found." });
    }

    res.status(200).json({ data: employeeIds });
  } catch (error) {
    console.error("Error fetching employee IDs:", error);
    res.status(500).json({ error: "An error occurred while fetching employee IDs." });
  }
};