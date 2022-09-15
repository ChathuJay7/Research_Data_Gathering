import React from 'react'
import "./Style.css";


function About() {
  return (
    <div>
      <h1 >About Us</h1>
      <h4 style={{textAlign: 'center', textAlign: 'justify'}}>We are computer science students of Uva Wellassa University of Sri Lanka. We are planning to develop a machine learning model for identify Alzheimer's disease in early stage.
      </h4> 
      <br />
      <h5 style={{ marginBottom: 300}}>Our main goal is develop a questionaire and gather the patient informations. The overall aim of this study is to develop a questionnaire based challenge that we can present to the patients and according to that input data we aim to develop an efficient model using ML techniques to compare and analyze the data to determine whether a given person has Alzheimer's disease or not.
      </h5>
      
    </div>
  )
}

export default About