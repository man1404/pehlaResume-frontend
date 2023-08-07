import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function submit(e) {
    e.preventDefault();
    try {
     console.log(email, password);
      await axios
        .post("http://localhost:4000/Login", {
          email: email,
          Password: password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.token ) {
            history("/Form", { state: { id: email } });
          } else{
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login-container">
      <form
        class="form"
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <p class="title">Login </p>

        <label>
          <input
            required={true}
            for="email"
            type="email"
            class="input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required={true}
            type="password"
            class="input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span>Password</span>
        </label>

        <button type="submit" class="submit">
          Submit
        </button>
        <p> Dont have an account ?</p>
        <Link to="/signup" class="submitt">
          {" "}
          Signup Here{" "}
        </Link>
      </form>
    </div>
  );
}

export default Login;
