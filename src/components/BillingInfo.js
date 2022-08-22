import React from 'react'
import '../styles/BillingInfo.css';
function BillingInfo() {
  return (
    <form className='billingInfo'>
            
    <label>Name on Card
    </label>
    <input type='text' placeholder='Opara Linus Ahmed'></input>
    
      
    <label> Card Type </label>

  <select name='States' size='1'>
      
      <option> Visa </option>
      <option> MasterCard </option>
      <option> Paypal </option>

  </select>

    
    <span className='partOne'>
    <label> Card Details</label>
      <input type='number' placeholder='44960 44960 44960 44960'></input>

      </span>

    <span className='partTwo'>

      <label> ExpiryDate </label>

      <input type='date' placeholder='04/23'></input>

    </span>
    <span className='partThree'>

<label> CVV </label>

<input type='text' placeholder='923'></input>

</span>
    
    </form> 
  )
}

export default BillingInfo