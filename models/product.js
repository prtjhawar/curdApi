const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title : String ,
    price : Number,
    offer_price : Number
})

module.exports = mongoose.model("product",productSchema)