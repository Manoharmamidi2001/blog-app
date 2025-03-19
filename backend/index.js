import express from "express";
import { port } from "./src/lib/config.js";
import { connectDB } from "./src/lib/db.js";
import blogsRoute from './src/routes/blogs.route.js';
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());  // ✅ Parses JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));  // ✅ Parses URL-encoded data
app.use(cors({
    origin: "http://localhost:3000",  // ✅ Allow only this origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true  // ✅ Allow cookies (if needed)
}))

// Routes
app.use("/api/blogs", blogsRoute);

// Start server
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
