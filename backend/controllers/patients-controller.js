const Patient = require("../model/Patient");

const getAllPatients = async (req, res, next) => {
  let patients;
  try {
    patients = await Patient.find();
  } catch (err) {
    console.log(err);
  }

  if (!patients) {
    return res.status(404).json({ message: "No Patients found" });
  }
  return res.status(200).json({ patients });
};

const getPatientById = async (req, res, next) => {
  const id = req.params.id;
  let patient;
  try {
    patient = await Patient.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!patient) {
    return res.status(404).json({ message: "No Patient found" });
  }
  return res.status(200).json({ patient });
};

const addPatient = async (req, res, next) => {
  const { name, age, gender, description, symptom1, symptom2, symptom3, symptom4, symptom5 } = req.body;
  let patient;
  try {
    patient = new Patient({
      name,
      age,
      gender,
      description,
      symptom1,
      symptom2,
      symptom3,
      symptom4,
      symptom5
    });
    await patient.save();
  } catch (err) {
    console.log(err);
  }

  if (!patient) {
    return res.status(500).json({ message: "Unable To Add Patient" });
  }
  return res.status(201).json({ patient });
};

const updatePatient = async (req, res, next) => {
  const id = req.params.id;
  const { name, age, gender, description, symptom1, symptom2, symptom3, symptom4, symptom5 } = req.body;
  let patient;
  try {
    patient = await Patient.findByIdAndUpdate(id, {
        name,
        age,
        gender,
        description,
        symptom1,
        symptom2,
        symptom3,
        symptom4,
        symptom5
    });
    patient = await patient.save();
  } catch (err) {
    console.log(err);
  }
  if (!patient) {
    return res.status(404).json({ message: "Unable To Update Patient By this ID" });
  }
  return res.status(200).json({ patient });
};

const deletePatient = async (req, res, next) => {
  const id = req.params.id;
  let patient;
  try {
    patient = await Patient.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!patient) {
    return res.status(404).json({ message: "Unable To Delete Patient By this ID" });
  }
  return res.status(200).json({ message: "Patient Successfully Deleted" });
};

exports.getAllPatients = getAllPatients;
exports.addPatient = addPatient;
exports.getPatientById = getPatientById;
exports.updatePatient = updatePatient;
exports.deletePatient = deletePatient;