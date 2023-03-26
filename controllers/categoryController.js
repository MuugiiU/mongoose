// const Category= require("../model/Category");
const Category = require("../model/Category");

const createCategory = async(req,res) => {
    const{title,description,categoryImg,categoryRating } = req.body;

    if(!title||!description||!categoryImg||!categoryRating){
        res.status(400).json({message:"title, des, img,rating bhgui bn"})
    } try{
        const category = await Category.create({
            title,
            description,
            categoryImg,
            categoryRating
        })
        res.status(201).json({message:"category amjilttai uuslee",category})
    } catch(error){
        res.status(400).json({message:"category amjiltgui bolloo", error:error.message})
    }
}

const getAllCategory= async(req,res)=>{
    try{
        const category= Category.find({});
        res.status(200).json({message:"category oldloo",category})
    } catch(err){
        res.status(400).json({message:"aldaa garlaa"})
    }
}

const getCategory= async(req,res)=>{
    const id=req.params.id 
    if(!id) {
        res.status(400).json({message:`${id} category oldsongui`,err:err.message})
    } try{
        const category= await Category.findById(id);
        res.status(200).json({data:category});
    }catch(err){
        res.status(400).json({message:`${id} categorytai medeelel oldsongui`, err:err.message})
    }
}

const updateCategory = async(req,res)=>{
    const {id}= req.params
    if(!id) {
        res.status(400).json({message:`${id} category oldsongui`,err:err.message})
    } try {
       const category= await Category.findByIdAndUpdate(id,req.body,{new:true});
       res.status(200).json({data:category});
    } catch(err){
        res.status(400).json({message:`${id} category medeelel oldsongui`,err:err.message})
    }
}

const deletCategory =async(req,res)=>{
    const {id}=req.params
    if(!id) {
        res.status(400).json({message:`${id} category oldsongui`,err:err.message})
    } try{
        const category=await Category.findByIdDelete(id);
        res.status(200).json({message:`${id} tei category ustlaa`,category})
    } catch(err){
        res.status(400).json({message:`${id} tei category oldsongui`, err:err.message})
    }
}

module.exports={createCategory,getAllCategory,getCategory,updateCategory,deletCategory}