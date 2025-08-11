const express  = require("express");
require("./config/database");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async(req,res)=>{
   const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "7104@gmail.com",
    password: "password123",
   });

   try{
   await user.save();
   res.send("User created successfully");}
   catch(err){
    res.status(500).send("Error creating user: " + err.message);
   }
});

connectDB()
.then(()=>{
  console.log("databse connected successfully");
  app.listen(7777,()=>{
  console.log("Server is running on port 7777");
});
})
.catch((err)=>{
  console.error("Database connection failed:");
}); 




