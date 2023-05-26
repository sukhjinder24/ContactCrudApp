const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require('./config/dbConnection');
const errorHandler = require("./middleware/errorHandler");
const app = express();

connectDb();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening at ${port}`);
}); 


app.use(express.json())
app.use("/contact", require("./routes/contactRoutes")); // "/contact" is common path of api
app.use(errorHandler)

