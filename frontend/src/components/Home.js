import React from 'react';
import { Link } from "react-router-dom";
import "./Style.css";
import img1 from "../assets/AlzheimersDisease1.jpg";
import img2 from "../assets/AlzheimersDisease2.jpg";

function Home() {
  return (
    <div style={{textAlign: 'center', justifyContent:'center'}}>
      <h1>Alzheimer's Disease</h1>
      <h5 style={{textAlign: 'center', textAlign: 'justify'}}>
      Alzheimer’s disease (AD) is a fatal, irreversible brain disease that weakens a patient’s memory, cognitive functions and shrinks the brain’s size while progressively worsening the symptoms, eventually leading to death of the patient. Currently there is no cure for the Alzheimer’s disease. Doctors and scientist still cannot understand the exact reason for the Alzheimer’s disease. They suspect that the age related changes in the body, genetics and life style factors are the causes for the disease and these factors may differ from person to person. Alzheimer’s disease is one of the major reasons for dementia. Even though the disease cannot be cured there are treatment that can control the symptoms. Hence it is very important to detect and identify the AD in early stages of the disease since the majority of the patients are elderly people.
      </h5>
      
      <img src={img1} alt="" style={{marginTop:20, marginBottom:20}}/>
      <br /><br />
      <h5 style={{textAlign: 'center', textAlign: 'justify'}}>
      AD does not have a cure to this date. We can only try to prolong the life time of the patient by slowing down the symptoms. Early detection of the disease is important for this particular purpose. The most straight forward method for this is to perform a MRI scan of the brain and analyze the image data by a professional personal. Many of the existing work is done using ML and image processing techniques to improve this image data analyzing process. But this method is very sophisticated, time consuming and expensive. Patient has to go to a hospital and pay a lot of money and consult a specialized doctor to diagnose the disease. As another solution to this problem we can use a more mechanical approach rather than a medical approach by considering the symptoms of the disease.AD results declining memory and cognitive abilities of the person. Hence we can perform a puzzles and questionnaire based challenge to the patient and use ML techniques to compare and analyze the results. 
      </h5>

      {/* <Link to={"/patients"}><button style={{width: 250}} type="button" className="btn btn-info">View Patient List</button></Link>
      <br /><br />
      <Link to={"/add"}><button style={{width: 250}} type="button" className="btn btn-info">+ Add New Patient</button></Link> */}
    </div>
  )
}

export default Home