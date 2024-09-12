import express, { response } from "express";
const app = express(); //The app variable will represent your server, and you'll use it to define routes 


// //GET-to send some data
// //PUT-to update or send data
// //POST-to get a data
// //DELETE

// app.use(express.json);
// app.delete("/user/:id", (req,res,next)=>{
//   console.log(req.params.id);
//   return res.send("Hello")
// }); //next is used to move to next available middlewares

//middle wares
app.use(express.json);


//connection and listeners


app.listen(5000,()=>console.log("server open"));