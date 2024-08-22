const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/")
.then(() =>{
    console.log("Connenction succesfully")
})
.catch(()=>{
    console.log("unable to connect database")
})

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    fullname:{
        type: String
    },
    address:{
        type: String
    },
    age:{
        type: Number
    }
});

const User = mongoose.model("user", userSchema)
app.post('/user',(req,res)=>{
    console.log(req.body)
    const user = new User(req.body)

    user.save()
    .then(() =>{
        res.status(200).json({
            Message: "Successfully"
        })
    }).catch((err)=>{
        res.status(500).json({
            message: err
        })
    })
 })

 app.get("/user",(req,res)=>{
    var usres = User.find()
    .then((user)=>{
        res.status(200).json({
            message: "get user success",
            userData: user
        })
    })
 })

app.put("/user/:username",(req, res)=>{
    const username = req.params

})

app.listen(500, () =>{
    console.log('app listen on port ${5000}')
})


