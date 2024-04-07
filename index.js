const express=require("express");
const app=express();
let port=8080;
app.listen(port,() =>{
console.log(`app is listening ${port}`);
});
app.use((req,res) =>{
    console.log("request received");
    res.send("This is basic response");
    // res.send({
    //     name:"apple",
    //     color:"red"
    // })
  //dcww
})