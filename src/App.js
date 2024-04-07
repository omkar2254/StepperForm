import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: 'Login' },
    { title: 'Signup' },
  ];

  const goToNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const goToPreviousStep = ()=>{
    if(activeStep === 1){
      setActiveStep(activeStep - 1)
    }
  }
  return (
    <Router>
      <div>
        <Stepper steps={steps} activeStep={activeStep} />
        <div className="form-container">
          <Routes>
            <Route
              path="/"
              element={<Login goToNextStep={goToNextStep} />}
            />
            <Route 
            path="/signup" 
            element={<Signup goToPreviousStep={goToPreviousStep}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
