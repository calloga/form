import React from 'react';
import '../styles/PersonalInfo.css';
function PersonalInfo() {
  return (

<form className='personalInfo'>
            
            <label>Name
            </label>
            <input type='text' placeholder='Opara Linus Ahmed'></input>
            <label>Email Address
            </label>
            <input type='text' placeholder='OparaLinusAhmed@devmail.com'></input>
            <label>Address 1
            </label>
            <input type='text' placeholder='The address of the user goes here'></input>
            <label>Address 2
            </label>
            <input type='text' placeholder='and here'></input>
            
            <span className='partOne'>
            <label> Local government </label>
              <input type='text' placeholder='Surulere'></input>

              </span>

            <span className='partTwo'>

              <label> State </label>
      
              <select name='States' size='1'>
                  
                  <option> Lagos </option>
                  <option> Kano </option>
                  <option> Oyo </option>
                  <option> Edo </option>
                  <option> Rivers </option>
                  <option> Plateau </option>
                  
                  
      
              </select>

            </span>
        
             
            
            </form> 
  )
}
 
export default PersonalInfo;

