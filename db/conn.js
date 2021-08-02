const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/web-dev',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("connected successfully .....");
}).catch((err) => {
    console.log(err);
}) 