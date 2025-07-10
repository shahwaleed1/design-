import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    
    await mongoose.connect(process.env.DB_URL);
      console.log("Successful DB connection!");
    }

   catch (err) {
    console.error("Error in DBconnection :", err);
  }
};

export default connectionDB;
