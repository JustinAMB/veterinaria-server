import express from 'express';
import conectarDB from './db/config.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
conectarDB();


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});