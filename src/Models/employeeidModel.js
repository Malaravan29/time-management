import mongoose from "mongoose";

const employeeIdSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
});

const EmployeeIdModel = mongoose.model("EmployeeId", employeeIdSchema);

export default EmployeeIdModel;
