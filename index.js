const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require("./route");

const app = express();
app.get("",(req,res)=>{
res.send("working");
});
app.listen(process.env.PORT || 3000,()=>{
        console.log("server started")
})
//mongoose.connect("mongodb+srv://nj:12345@cluster0.r1bv4.mongodb.net/Students?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
//()=>{
  //      const app = express();
    //    app.use("/api",route);
      //  app.use(bodyParser.urlencoded({extended: true}));
        //app.use(express.json());
        //app.listen(process.env.PORT || 3000,()=>{
          //  console.log("Server Started on 3000 !!");
       // });
    //}
//);
