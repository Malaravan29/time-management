import mongoose from "mongoose";


const EntrySchema = new mongoose.Schema({
  ticketNo: { type: String, required: true },
  noOfHours: { type: Number, required: true },
  description: { type: String, required: true },
});

const UserTicketsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  entries: [EntrySchema], // Array of entries
});

const UserTickets = mongoose.model('Userdata', UserTicketsSchema);

export default  UserTickets;
