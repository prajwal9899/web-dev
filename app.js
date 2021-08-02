const express = require('express')
const app = express()
const path = require("path")
const hbs = require("hbs")
const PORT = process.env.PORT || 8000
const staticPath = path.join(__dirname + "/public")
const viewsPath = path.join(__dirname + "/templates/views")
const partialsPath = path.join(__dirname + "/templates/partials")

// // require schema
const User = require('./models/userInfoSchema')

// get data from form 
app.use(express.urlencoded({extended:false}))

// databse connection
require('./db/conn')

// static
app.use(express.static(staticPath))
app.use(express.json())

// view engines
app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)



// Routing

app.get('/', (req,res) => {
    res.render("index")
})

// app.get('/about', (req,res) => {
//     res.render("about")
// })

// app.get('/services', (req,res) => {
//     res.render("services")
// })

// app.get('/gallery', (req,res) => {
//     res.render("gallery")
// })

// app.get('/contact', (req,res) => {
//     res.render("contact")
// })

app.post('/contact', async (req,res) => {
   try {
     const {name,email,phone,message} = req.body

     if(!name || !email || !phone || !message){
       res.send("no data filled")
     }else{
    const registerUser = new User({
        name,email,phone,message
    })

    const data = await registerUser.save()
    res.render("index")
        }

   } catch (err) {
       res.send(err)
   }
})


app.listen(PORT, () => {
    console.log(`listening on the port ${PORT}`);
})