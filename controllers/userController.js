const User= require("../model/User");


const createUser= async(req,res) =>{
    const {name,email,password} = req.body;
     if(!name||!email||!password) {
        res.status(400).json({message:"ner , email eswel nuuts ug bhgui bn"})
     }
     try{
        const user=await User.create({
            name,
            email,
            password
        })
        res.status(201).json({message:"amjilttai burtgegdlee",user})
     }
     catch(error){
        req.status(400).json({message:"burtgel amjiltgui bolloo",error:error.message}) 
     }
    }

const getAllUsers = async(req,res)=>{
    try{
        const users=await User.find({});
        res.status(200).json({message:"hereglegchiin medeelel oldloo",users})
    } catch(err){
      res.status(400).json({message:"aldaa garlaa"})
    }
};

const getUser =async(req,res)=>{
 const id=req.params.id
 if(!id){
    res.status(400).json({message:`${id} heregleegchiin medeelel oldsongui`, err:err.message })
 }
 try{
 
     const user= await User.findById(id);
     res.status(200).json({data:user});
 } catch (err){
     res.status(400).json({message:`${id} hereglegchiin medeelel oldsongui`,err:err.message})
 }
}
const updateUser =async(req,res)=>{
    const {id}=req.params
    if(!id){
       res.status(400).json({message:`${id} heregleegchiin medeelel oldsongui`, err:err.message })
    }
    try{
    
        const user= await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({data:user});
    } catch (err){
        res.status(400).json({message:`${id} hereglegchiin medeelel oldsongui`,err:err.message})
    }
   }
   const deleteUser =async(req,res)=>{
    const {id}=req.params
    if(!id){
       res.status(400).json({message:`${id} heregleegchiin medeelel oldsongui`, err:err.message })
    }
    try{
    
        const user= await User.findByIdAndDelete(id);
        res.status(200).json({message:`${id} tei hereglegch ustgagdlalaa`,user});
    } catch (err){
        res.status(400).json({message:`${id} hereglegchiin medeelel oldsongui`,err:err.message})
    }
   }



module.exports ={ createUser, getAllUsers,getUser,updateUser,deleteUser};