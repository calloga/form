import React from 'react';
import "../styles/Stepper.css";
import Step from './Step';

const reset=()=>{

  let oldActive= document.getElementsByClassName('active');
  
  
  for(let i=0; i<oldActive.length; i++){
    oldActive[i].classList.remove('active');
   }

};

function handleStepper({FormTitles, activeStep}){

  reset();
  return FormTitles.map((element)=> <Step element={element} activeStep={activeStep}/>)
};
function Stepper({FormTitles, activeStep}) {


  return (
    
    <div className='stepper'>
      <div className='progressLine'> </div>
      <div className='steps'>
          {
          
          handleStepper({FormTitles, activeStep})
          
          }
      </div>    
    

    </div>
  )
}

export default Stepper