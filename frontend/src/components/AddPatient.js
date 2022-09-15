import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css";

function AddPatient() {

  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    description: "",
    symptomOne: "",
    symptomTwo: "",
    symptomThree: "",
    symptomFour: "",
    symptomFive: "",
    
  });

  const [gender, setGender] = useState("male")

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/patients", {
        name: String(inputs.name),
        age: Number(inputs.age),
        gender: String(gender.gender),
        description: String(inputs.description),
        symptom1: String(inputs.symptomOne),
        symptom2: String(inputs.symptomTwo),
        symptom3: String(inputs.symptomThree),
        symptom4: String(inputs.symptomFour),
        symptom5: String(inputs.symptomFive),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
     console.log(e.target.name, "Value", e.target.value);
  };


  // const handleGender = (e) => {
  //    setGender(e.target.value),
  //    [e.target.name]: e.target.value
  //    console.log(e.target.name, "Value", e.target.value);
  // };

  const handleGender = (e) => {
    setGender((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
     console.log(e.target.name, "Value", e.target.value);
  };
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    //setGender(e.target.value);

    if (
      inputs.name === "" ||
      inputs.age === "" ||
      inputs.description === "" ||
      inputs.symptomOne === "" ||
      inputs.symptomTwo === "" ||
      inputs.symptomThree === "" ||
      inputs.symptomFour === "" ||
      inputs.symptomFive === "" 
    ) {

      alert("Please fill all the details");
      return;
    }
    
    

    //console.log(inputs);
    sendRequest().then(() => history("/patients"));

    
  };

  return (
    <div>

<div className='center col'  >
    <h1>Add Patient</h1>
</div>

      <form onSubmit={handleSubmit} style={{ border:"1px solid black", padding:20, marginBottom:10 }}>

        <div className="form-row">

          <div className="form-group col-md-6">
            <label for="name">Name</label>
            <input 
                  type="text" 
                  className="form-control"  
                  id="name" 
                  name="name"
                  placeholder="Name" 
                  value={inputs.name}
                  onChange={handleChange}/>
          </div>

          <div className="form-group col-md-6">
            <label for="age">Age</label>
            <input 
                  type="number" 
                  className="form-control" 
                  id="age" 
                  name="age"
                  placeholder="Age" 
                  value={inputs.age} 
                  onChange={handleChange}/>
          </div>

        </div>

        <fieldset className="form-group">
          <div className="row">

            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10" >
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="gridRadios1" value="male" onChange={handleGender}  />
                <label className="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="gridRadios2" value="female" onChange={handleGender}  />
                <label className="form-check-label" for="gridRadios2">
                  Female
              </label>
              </div>
            </div>

          </div>
        </fieldset>


        <div className="form-group">
          <label for="description">Description</label>
          <textarea 
                  className="form-control" 
                  id="description" 
                  rows="3" 
                  name="description"
                  value={inputs.description}
                  onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label for="symptom1">Symptom1</label>
          <input 
                  type="text" 
                  className="form-control"  
                  id="symptom1" 
                  name="symptomOne"
                  placeholder="Symptom1" 
                  value={inputs.symptomOne}
                  onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label for="symptom2">Symptom2</label>
          <input 
                type="text" 
                className="form-control" 
                id="symptom2" 
                name="symptomTwo"
                placeholder="Symptom2" 
                value={inputs.symptomTwo}
                onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label for="symptom3">Symptom3</label>
          <input 
                type="text" 
                className="form-control" 
                id="symptom3" 
                name="symptomThree" 
                placeholder="Symptom3" 
                value={inputs.symptomThree}
                onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label for="symptom4">Symptom4</label>
          <input 
                type="text" 
                className="form-control" 
                id="symptom4" 
                name="symptomFour"
                placeholder="Symptom4" 
                value={inputs.symptomFour}
                onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label for="symptom5">Symptom5</label>
          <input 
                type="text" 
                className="form-control" 
                id="symptom5" 
                name="symptomFive"
                placeholder="Symptom5" 
                value={inputs.symptomFive}
                onChange={handleChange}/>
        </div>

        <button type="submit" className="btn btn-primary submit_form_btn">Submit</button>
      </form>
    </div>
  )
}

export default AddPatient