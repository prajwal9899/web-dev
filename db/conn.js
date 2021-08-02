const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Prajwal9899:Prajwal@9899@cluster0.mwlgk.mongodb.net/web-dev?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("connected successfully .....");
}).catch((err) => {
    console.log(err);
}) 
