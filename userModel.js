import mongoose from "mongoose";
mongoose.set('strictQuery', true);
const fooditemsSchema= mongoose.Schema(
    {
        name:{
            type:String,
            // required:true,
        },
        description:{
            type:String,
            // required:true,
        },
        price:{
            type:Number,
            // required:true,
        },
        flavour:{
                type:String,
                // required:true,
            },
        
        }
    )
const Fooditems = mongoose.model("Fooditems",fooditemsSchema);
export default Fooditems;