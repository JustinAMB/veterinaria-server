import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        const db = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const url = `${db.connection.host}: ${db.connection.port}`;
        console.log(`MongoDB connected: ${url}`);

    } catch (error) {
        console.log(`error: ${error.message}`);
        //process.exit(1);
    }
}
export default connectDB;