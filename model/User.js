const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
         type: String,
         required:[true, "hereglegchiin neriig zaaval shaardana"]
    },
    profileImg:String,
    email: {
        type: String,
        unique: true,

    },
    password: String,
    role:{
        type: String,
        enum:["User","Admin"],
        default:"User"
    },
    phone:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const user = mongoose.model("User", UserSchema,"users");

module.exports = user;