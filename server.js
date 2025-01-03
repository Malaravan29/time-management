import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/DB/db.js';


// Import routes
import usertimeRouts from "./src/Routes/employeetimeRout.js"
import employeeidRouts from "./src/Routes/employeeidRout.js"

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

//Routes
app.use("/", usertimeRouts);
app.use("/", employeeidRouts);

// Start server
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});

