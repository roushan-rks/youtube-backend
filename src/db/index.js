import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


console.log(process.env.MONGODB_URI);


const connectDB = async ()=>{

    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    //    app.on("error",(error)=>{
    //     console.log("ERROR: ",error);
    //     throw error;
    //    })

    //    app.listen(process.env.PORT,()=>{
    //         console.log(`App is listening on port ${process.env.PORT}`);
    //    })
          console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

       
    }
    catch(error){
        console.error("MONGODB connection error ",error);
        process.exit(1);
    }

}

export default connectDB