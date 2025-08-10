const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://kunalkushwah7104:YSMbbFje5jUrIEL6@cluster0.wzbbsrp.mongodb.net/',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
};

module.exports = connectDB;