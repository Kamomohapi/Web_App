import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    //setErrors(Validation(values));
    
    axios.default.withCredentials = true;
    axios
      .post("http://localhost:8006/Login", values)
      .then((res) => {
        console.log(res);

        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));

    /*const fetch = async () => {
      const response = await axios({
        method: "get",
        baseURL: "http://localhost:8081/login",
        url: "requisition",
      });
      console.log(response);
    };
    fetch();*/
  };

  //event.preventDefault();
  //setErrors(Validation(values));

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <form onSubmit={handleSubmit}>
            <h2>Sign_In</h2>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                name="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="form-control rounded-0"
              />
              {/* {errors.email && <span className='text-danger'>{errors.email}</span>} */}
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                password="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                className="form-control rounded-0"
              />
              {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              <strong>Login</strong>
            </button>

            <p>You agree to our terms and policies</p>
            <Link
              to="/SignUp"
              className="btn btn-default border w-100 bg-danger rounded-0 text-decoration-none"
            >
              <strong>Create Account</strong>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
