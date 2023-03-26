const mongoose= require("mongoose");


const categorySchema= new mongoose.Schema({
 title:{
    type:String,
    required: true,
 },
 description:{
    type:String,
    maxlength:[500,"tailbar hamgiin ihdee 500 temdegtees ihgui baina"]
 },
 categoryImg:{type:String},
 categoryRating:Number
})

const category = mongoose.model("Category",categorySchema);

module.exports = category;