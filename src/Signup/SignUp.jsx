import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleLogInBtn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm.value;
    console.log(email, password, confirmPassword);
    setError('')
    if (password !== confirmPassword) {
      setError("your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    // for firebase
    createUser(email, password)
    .then(result => {
      const loggedUser = result.user
      console.log(loggedUser);
      e.target.reset()
      setError('')
    })
    .catch(error => {
        console.log(error.message);
        setError(error.message)
    })
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
        <h2>Please Sign Up</h2>
        <form onSubmit={handleLogInBtn}>
          <label htmlFor="">Email</label> <br />
          <input
            style={{
              width: "100%",
              padding: "10px 0 ",
              paddingLeft: "5px",
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
              paddingLeft: "5px",
              border: "1px solid lightgray",
              marginBottom: "10px",
            }}
            type="password"
            name="password"
            id=""
          />{" "}
          <br />
          <label style={{ marginTop: "10px" }} htmlFor="">
            Confirm Password
          </label>{" "}
          <br />
          <input
            style={{
              width: "100%",
              padding: "10px 0",
              paddingLeft: "5px",
              border: "1px solid lightgray",
            }}
            type="password"
            name="confirm"
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
            Sign Up
          </button>
          <p>
            <small>
              Already have an account?<Link to="/login">Login</Link>
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

export default SignUp;
