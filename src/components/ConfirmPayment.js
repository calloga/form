import React from 'react'
import '../styles/ConfirmPayment.css';
import Currency from '../resources/images/currency.svg';
function ConfirmPayment() {

 
  return (
    <form className='confirmPayment'>
                
      <div className='header'> 
        <div className='row'>

          <h5>Item Name</h5> 
          <h5 className='priceCategory'>
            <img src={Currency} alt='currency'></img>
            
            Price 
            
          </h5>

        </div>
      
      </div>

      <div className='body'> 

        <div className='row'>

          <p>Data science and usability</p> 
          <h5>
          50,000.00 
          </h5>
        </div>

        <div className='row'>

          <p>Shipping</p> 
          <h5>
          00.00 
          </h5>

        </div>
      
      </div>

      <div className='footer'> 
      
        <div className='row'>

          <p>Total</p> 
          <h5>
          50,000.00 
          </h5>
        </div>


      </div>
          
    
    </form> 
  )
}

export default ConfirmPayment