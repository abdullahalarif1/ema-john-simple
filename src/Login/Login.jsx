import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()

  // handle sign up button
  const handleSignUpBtn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setError("");
    // for firebase
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        e.target.reset();
        setError("");
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
        setError(error);
      });
  };

  return (
    <div
      style={{
        margin: "50px auto",
        width: "50%",
        border: "1px solid lightgray",
      }}
    >
      <div style={{ padding: "20px" }}>
        <h2>Please Login</h2>
        <form onSubmit={handleSignUpBtn}>
          <label htmlFor="">Email</label> <br />
          <input
            style={{
              width: "100%",
              padding: "10px 0",
              border: "1px solid lightgray",
              marginBottom: "10px",
            }}
            type="email"
            name="email"
            id=""
          />{" "}
          <br />
          <label style={{ marginTop: "10px" }} htmlFor="">
            Password
          </label>{" "}
          <br />
          <input
            style={{
              width: "100%",
              padding: "10px 0",
              border: "1px solid lightgray",
            }}
            type="password"
            name="password"
            id=""
          />{" "}
          <br />
          <button
            style={{
              width: "100%",
              padding: "10px 0",
              border: 0,
              marginTop: "15px",
              background: "#FFE0B3",
            }}
          >
            Login
          </button>
          <p>
            <small>
              New to ema john?<Link to="/register">Sign Up</Link>
            </small>
          </p>
          <p style={{ color: "red" }}>
            <small>{error}</small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
