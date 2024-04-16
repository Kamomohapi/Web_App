import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//import { Toast } from "react-hot-toast";

function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  //const [errors, setErrors] = useState({});

  /*const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };*/

  const handleSubmit = (event) => {
    event.preventDefault();
    //setErrors(Validation(values));
    console.log(values);

    axios
      .post("http://localhost:8006/Signup", values)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  /*useEffect(() => {
  if (errors.name === '' && errors.email === '' && errors.password === '') { }
}, [errors, values, navigate]);*/

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <h2>Sign_up</h2>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="form-control rounded-0"
            />
            {/* {errors.name && <span className="text-danger">{errors.name}</span>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded-0"
            />
            {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Sign up</strong>
          </button>
          
          <p>You agree to our terms and policies</p>
          <Link to="/Login">
            <strong>Login</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
