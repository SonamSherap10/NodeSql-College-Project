const express = require("express")
const app = express()               // require and intialize express in variable `app`
const db = require("./model/index")  //importing the database

const Port = 6565          //defining port number
db.sequelize.sync({force:false}) 

app.use(express.json())                 //telling to parse json data
app.use(express.urlencoded({extended : true}))

const ItemRoutes = require('./routes/itemRoute')      //giving items route

app.use("/items",ItemRoutes)     //use the items route   

//All the api For the items :

//create Items =>  localhost:6565/items/add
//get Items =>  localhost:6565/items/get
//get Items by their id =>  localhost:6565/items/get/:id
//delete Items by their id => localhost:6565/items/delete/:id
//update Items by their id => localhost:6565/items/update/:id


app.listen(Port,()=>{           //running server on the defined port 
  console.log(`Port is active on ${Port}`)
})