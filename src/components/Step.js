import React from 'react';
import '../styles/Step.css';

function Step({element, activeStep}){

         
          if(element===activeStep){
            
            return (
              <div className='step active' id={element}>
              <h4 className='step-title active'>Step{element}</h4>
              <div className='step-highlighter active'></div>
      
              </div>
            );

          }else { 

            return (
            <div className='step unactive' id={element}>
            <h4 className='step-title unactive'>{element}</h4>
            <div className='step-highlighter unactive'></div>
            </div>
            
            );

         }
}  
          


export default Step;