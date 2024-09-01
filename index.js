const express = require("express")
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const router = require('./router/test')


//midelware
app.use(bodyParser.json());



//data base connection
mongoose.connect('mongodb://127.0.0.1:27017/product_data', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})



//routes
app.use('/product',router);
port = 4000;


app.listen(port,()=>{
    console.log(`port is successfuly run on port ${port}`);
})