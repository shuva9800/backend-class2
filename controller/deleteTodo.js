const Todo= require('../models/Todo');

exports.deleteTodo= async (req,res)=>{
    try{
        const id=req.params.id;
        await Todo.findByIdAndDelete({_id:id});

       res.status(200).json({
        success: true,
        message:"successfully deleted the specific id element",
       })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"error in server",
        });
    }

}