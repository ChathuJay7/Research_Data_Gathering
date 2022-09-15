const express = require("express");
const router = express.Router();
const Patient = require("../model/Patient");
const patientsController = require("../controllers/patients-controller");

router.get("/", patientsController.getAllPatients);
router.post("/", patientsController.addPatient);
router.get("/:id", patientsController.getPatientById);
router.put("/:id", patientsController.updatePatient);
router.delete("/:id", patientsController.deletePatient);

module.exports = router;
