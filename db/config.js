import mongoose from 'mongoose';


import dotenv from 'dotenv';
const connectDB = async() => {
    try {
        mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log(`error: ${error.message}`);
        //process.exit(1);
    }
}
export default connectDB;