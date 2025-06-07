import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";


const PORT = process.env.PORT || 3000 ;

dotenv.config({});

connectDB();

const app = express();

app.use(express.json());// to access the json payload coming in request bodies
app.use(cookieParser());// to access the cookies



// here are the apis 
import userRoutes from "./routes/user.route.js";
app.use('/api/v1/user', userRoutes);
import courseRoute from "./routes/course.route.js";
app.use('/api/v1/course', courseRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})