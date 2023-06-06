import mongoose from "mongoose";

//Track the Connection
let isConnected = false;

export const connectToDB = async() =>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDB is Already Connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName: "share-prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log("MongoDB Connected.");

    }catch(error){
        console.error(error)
    }
}