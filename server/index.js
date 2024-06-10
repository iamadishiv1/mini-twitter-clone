import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import tweetRoutes from "./routes/tweets.js";
import cors from 'cors';

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//database connection
const connect = async () => {
    // mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO)
    //return promise
    .then(() => {
        console.log("Mongo Database connected");  
    })
    .catch((err) => {
        throw err;
    });
};
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);
app.get('/', (req, res) => {
    res.send("Hello World");
});

//error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({
        success: false,
        status,
        message,
    });
});

//listeining to port 8000
app.listen(8000, () => {
    connect();
    console.log("Server is running on port 8000");
});
