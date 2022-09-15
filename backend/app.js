const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/patient-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/patients", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.wvzschw.mongodb.net/patientData?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));