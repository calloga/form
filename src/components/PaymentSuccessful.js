import React from 'react';
import '../styles/PaymentSuccessful.css';
import checkIcon from '../resources/images/checkIcon.png';

function PaymentSuccessful() {
  return (
    <div className='paymentSuccessful'>
      
      <span className='checkImage'><img src={checkIcon} alt='check'/></span>
    
      <div className='paymentWrapper'>
        <h1>Purchase Completed</h1>
        
        <p>Please check your email for details concerning this transaction</p>

        <a href='./'>Return Home</a>
      </div>

    </div>
  )
}

export default PaymentSuccessful