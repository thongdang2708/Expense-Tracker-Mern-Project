
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;
const colors = require("colors");
const postRoute = require("./routes/postRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");

//Connect DB
connectDB();

//Middleware function

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Api URL sources
app.use("/api/posts", postRoute);


//Error handling

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`.green.underline.bold);
});
