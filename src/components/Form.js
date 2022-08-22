
import React, {useState} from 'react'
import PersonalInfo from './PersonalInfo.js';
import BillingInfo from './BillingInfo.js';
import ConfirmPayment from './ConfirmPayment.js';
import Stepper from './Stepper.js';
import '../styles/Form.css';
import PaymentSuccessful from './PaymentSuccessful.js';
function Form() {

  const [step, setStep]=useState(0);
 
  const FormTitles=['Personal Info', 'Billing Info', 'Confirm Payment'];
  const StepDisplay = ()=>{

    if(step===0){

      return <PersonalInfo/>
    } else if(step===1){

      return <BillingInfo/>
    }else if(step===2){

      return <ConfirmPayment/>
    }else if(step===3){
      return <PaymentSuccessful/>
    }
  };
  
  return (
    <div className='form'>
      
        {(step<3)&&(<div className='header'> 
        <h1>Complete your purchase</h1> 
        
        <Stepper FormTitles={FormTitles} activeStep={FormTitles[step]}/>
        
        </div>)}

          
        <div className='body'>{StepDisplay()}</div>

        {(step<3)&&(<div className='footer'>

          <button 
          className='btn btn-primary' 
          type='submit' 
          onClick={()=> {setStep((currentPage)=> (currentPage+1)||0)}}> {((step===2)&&'Pay')||'Next'}
            </button> 
          <button 
          className='btn btn-secondary' 
          type='submit' 
          onClick={()=> {}}> Cancel Payment
            </button>
            
        </div>)
        }

    </div>
  )
}

export default Form;