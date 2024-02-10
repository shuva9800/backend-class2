const Todo=require('../models/Todo');


//define route handler
exports.getTodo= async(req,res)=>{
    try{
        const todo= await Todo.find({})
        res.status(200).json(
            {
                success:true,
                data: todo,
                message:"Entire todo is fetched"
            }
        );
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

exports.getTodoByid= async (req,res)=>{
    try{
        const id=req.params.id;
        const todo= await Todo.findById({_id:id});

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
                message:`data is fetched successfully for the given id-${id}`
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