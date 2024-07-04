import React, { useEffect, useState } from 'react'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept';
import SignupPage from '../../Components/SignupComponents/SignupPage';
import Login from '../../Components/SignupComponents/Login';

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
    const [signup, setSignup] = useState(false);
  return (
    <>
    {signup? <SignupPage signup={signup} setSignup={setSignup}/>: <Login signup={signup} setSignup={setSignup}/>}
     <CreativeConcept/> 
    </>
  )
}

export default Signup
