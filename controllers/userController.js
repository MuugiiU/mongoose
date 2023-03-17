const User= require("../model/User");

const getAllUsers = (req,res)=>{};

const createUser= async(req,res) =>{
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    res.status(201).json({message: "Amjilttai burtgegdlee", user})
}

module.exports ={ createUser, getAllUsers};