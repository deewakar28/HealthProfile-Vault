import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/HealthProfile-Vault`);
        const connection = mongoose.connection;

        connection.on('connection',()=>{
            console.log("MongoDB is Connected!!");
        })

        connection.on('error',(err)=>{
            console.log("MongoDB connection error",err);
        })

    } catch (error) {
        console.log("Error has occured while connecting to mongodb",error)
    }
}

export default connectDB;
