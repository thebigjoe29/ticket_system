import "../signupbox/Loginbox.css";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

function Loginbox() {
  
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5056/sign/createaccount", {
          name,
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/");
            alert("Account created successfully");
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
    <div className="loginbox">
      <p className="account-text">CREATE ACCOUNT</p>

      <form method="POST" className="sign-up-form">
        <input
          type="text"
          placeholder="Full Name"
          className="formtext"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="formtext"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="formtext"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" class="submitbtn" onClick={submit}>
          Create Account
        </button>
        <p className="already">
          {" "}
          Already have an account?{" "}
          <Link to="/">
            <a href=" ">Log in</a>
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Loginbox;
