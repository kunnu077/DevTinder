const express  = require("express");
const app = express(); // ye hum server express server bnane ke liye use kar rahe hain

app.use("/",(req,res)=>{
  res.send("Hello from Express Server");
});

app.use("/hello",(req,res)=>{
  res.send("Hello from Express Server on /hello route");
})

app.use("/api",(req,res)=>{
  res.json({message: "Hello from Express Server on /api route"});

})
app.listen(7777,()=>{
  console.log("Server is running on port 7777");
})

