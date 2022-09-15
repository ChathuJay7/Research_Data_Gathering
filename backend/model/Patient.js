const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  symptom1: {
    type: String,
    required: true,
  },
  symptom2: {
    type: String,
    required: true,
  },
  symptom3: {
    type: String,
    required: true,
  },
  symptom4: {
    type: String,
    required: true,
  },
  symptom5: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Patient", patientSchema);