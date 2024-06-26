import React, { useState } from 'react'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept';
import SignupPage from '../../Components/SignupComponents/SignupPage';
import Login from '../../Components/SignupComponents/Login';

const Signup = () => {
    const [signup, setSignup] = useState(false);
  return (
    <>
    {signup? <SignupPage signup={signup} setSignup={setSignup}/>: <Login signup={signup} setSignup={setSignup}/>}
     <CreativeConcept/> 
    </>
  )
}

export default Signup
