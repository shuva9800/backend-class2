const Todo= require('../models/Todo');

exports.updateTodo= async (req,res)=>{
    try{
        const id=req.params.id;
        const {title, description}=req.body;
        const todo= await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()});

        if(!todo){
            res.status(404).json({
                success:false,
                message:"no data found for the given id"
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:todo,
                message:`data is fetched successfully for the given id-${id} and updated`
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"error in server"
        });
    }

}