
const express = require("express") ;
const { chats } = require("./data");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());

dotenv.config();
connectDb();
app.get('/',(req,res) =>{
    res.send("API is running");
})

app.use("/api/user",userRoutes);
app.use("/api/chat",chatRoutes);


app.use(notFound);
app.use(errorHandler);

app.listen(5000,console.log("server started"));