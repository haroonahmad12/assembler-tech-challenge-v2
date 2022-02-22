import React, { useState } from "react";
import { signInWithEmailRequest } from "../../../redux/auth-reducer/actions";
import { singInWithGoogle } from "../../../services/auth";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100 col-xs-8 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // signInWithEmailRequest(email, password);
                  console.log(email, password);
                }}
              >
                <div className="card-body p-5 text-center ">
                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4 form-group">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-outline mb-4 form-group">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => {
                        setPass(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      Remember password
                    </label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>

                  <hr className="my-4" />

                  <button
                    className="btn btn-lg btn-block btn-primary"
                    style={{ backgroundColor: "#dd4b39" }}
                    type="submit"
                    onClick={singInWithGoogle}
                  >
                    <i className="fab fa-google me-2"></i> Sign in with google
                  </button>
                  <button
                    className="btn btn-lg btn-block btn-primary mb-2"
                    style={{ backgroundColor: "#3b5998" }}
                    type="submit"
                  >
                    <i className="fab fa-facebook-f me-2"></i>Sign in with
                    facebook
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
