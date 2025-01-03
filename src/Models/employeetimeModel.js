import mongoose from "mongoose";


const EntrySchema = new mongoose.Schema({
  ticketNo: { type: String, required: true },
  noOfHours: { type: Number, required: true },
  description: { type: String, required: true },
});

const EmployeeTicketsSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  date: { type: Date, required: true },
  entries: [EntrySchema], // Array of entries
});

const EmployeeTickets = mongoose.model('Employeedata', EmployeeTicketsSchema);

export default  EmployeeTickets;
