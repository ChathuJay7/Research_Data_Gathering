import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Style.css";

const URL = "http://localhost:5000/patients";
  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };


const Patients = () => {

  
    const [patients, setPatients] = useState([]);
    const id = useParams().id;

    const history = useNavigate();

    useEffect(() => {
        fetchHandler().then((data) => setPatients(data.patients));
      }, [id]);
  
    const deleteHandler = async (id) => {
        await axios
          .delete(`http://localhost:5000/patients/${id}`)
          .then((res) => res.data)    
          .then(() => history("/"))      
          .then(() => fetchHandler())
          .then(() => history("/patients"));      
    };


  return (
    
<div>

<div className='center col'  >
    <h1>All Patient Details</h1>
</div>


<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Description</th>
      <th scope="col">Symptom1</th>
      <th scope="col">Symptom2</th>
      <th scope="col">Symptom3</th>
      <th scope="col">Symptom4</th>
      <th scope="col">Symptom5</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    
    

    {patients &&
          patients.map((patient, i) => (
            <tr key={i}>
                <th scope="row">{i+1}</th>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.description}</td>
                <td>{patient.symptom1}</td>
                <td>{patient.symptom2}</td>
                <td>{patient.symptom3}</td>
                <td>{patient.symptom4}</td>
                <td>{patient.symptom5}</td>

                <td>
                  <Link to={`/updatePatient/${patient._id}`}><button type="button" class="btn btn-warning"><i className="fas fa-edit"></i>&nbsp;Update</button></Link>
                </td>
                <td>
                 <button type="button" class="btn btn-danger"   onClick={() => deleteHandler(patient._id)}><i className="fas fa-trash-alt"></i>Delete</button>
                </td>
            </tr>
          ))}


    
  </tbody>
</table>


</div>
  )
}

export default Patients