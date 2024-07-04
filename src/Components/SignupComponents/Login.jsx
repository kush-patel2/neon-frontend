import React, { useState } from "react";
import '../../assets/css/loginsignup.css'

const Login = ({ signup, setSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card sign-in-form text-white"
                style={{borderRadius: "1rem"}}
              >
                <div className="card-body pt-3 pb-3 pr-5 pl-5 text-center">
                  <form>
                    <div className="mb-md-5 mt-md-4">
                      <h2 className="fw-bold mb-2 text-uppercase">Sign In</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your Email and Password!
                      </p>

                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          className="form-control form-control-lg"
                          id="txtEmail"
                          name="EmailAddress"
                          placeholder="Email Address"
                          required
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control"
                          id="txtpwd"
                          name="Password1"
                          placeholder="Password"
                          required
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group ">
                        <input
                          className="show-pwd mt-2"
                          type="checkbox"
                          onClick={() => {
                            const pwdField = document.getElementById('txtpwd');
                            pwdField.type = pwdField.type === 'password' ? 'text' : 'password';
                          }}
                        />
                        <label> Show Password</label>
                      </div>
                      <div className="form-group" style={{clear:"both"}}>
                        <button className="button_main mt-5 " type="submit">
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>{" "}
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <p onClick={()=> setSignup(true)} className="text-white-50 fw-bold" style={{cursor:"pointer"}}>
                        Sign Up
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

export default Login;
