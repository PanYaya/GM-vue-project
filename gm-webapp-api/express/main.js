const express =require("express")
const products = require("./products")
const app =express()
// app.use("/",(req,res)=>{
//     res.end("hello express!")
// })
app.use("/product",products)

app.listen(3002,()=>{
    console.log("server is listening......")
})

