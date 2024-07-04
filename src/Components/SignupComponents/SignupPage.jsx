import React, { useState } from "react";
import '../../assets/css/loginsignup.css'

const SignupPage = ({ signup, setSignup }) => {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: ""
  // });
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [phone , setPhone] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");


  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };
  return (
    <div>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-10 col-xl-10">
              <div
                className="card sign-in-form text-white"
                style={{borderRadius: "1rem"}}
              >
                <div className="card-body pt-3 pb-3 pr-5 pl-5 text-center">
                  <form>
                    
                    <div className="mb-md-5 mt-md-4">
                      <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your details here!
                      </p>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <input
                              className="form-control form-control-lg"
                              id="txtFName"
                              name="Firstname"
                              placeholder="First Name"
                              required
                              type="text"
                              value={firstName}
                              onChange={(e)=> setFirstName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input
                              className="form-control form-control-lg"
                              id="txtLName"
                              name="Lastname"
                              placeholder="Last Name"
                              required
                              type="text"
                              value={lastName}
                              onChange={(e)=> setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Phone</label>
                            <input
                              className="form-control form-control-lg"
                              id="txtPhone"
                              name="Phone"
                              placeholder="Phone Number"
                              required
                              type="text"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>E-mail</label>
                            <input
                              className="form-control form-control-lg"
                              id="txtEmail"
                              name="Email"
                              placeholder="Email address"
                              required
                              type="text"
                              value={email}
                              onChange={(e)=> setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Password</label>
                            <input
                              type="Password"
                              className="form-control form-control-lg"
                              id="txtPassword"
                              name="Password"
                              placeholder="Password"
                              required
                              value={password}
                              onChange={(e)=> setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Re-enter Password</label>
                            <input
                              type="Password"
                              className="form-control form-control-lg"
                              id="txtConfirmPassword"
                              name="ConfirmPassword"
                              placeholder="Re-enter Password"
                              required
                              value={confirmPassword}
                              onChange={(e)=> setConfirmPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group" style={{clear:"both"}}>
                        <button className="button_main mt-5 " type="submit">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                  <div>
                    <p className="mb-0">
                      Already have an account?{" "}
                      <p onClick={()=> setSignup(false)} className="text-white-50 fw-bold" style={{cursor:"pointer"}}>
                        Sign In
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default SignupPage;
