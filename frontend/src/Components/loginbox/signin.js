import "../loginbox/signin.css";
import { Link,  } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import Dashboard from "../dashboard/Dashboard";
import Homecont from "../homecont/Homecont";

function Signinbox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);


  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5056/sign/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            setIsSignedIn(true);
            console.log(res.data);
            localStorage.setItem("auth",email);
          } else if (res.data === "notexist") {
            alert("User hasn't signed up");
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
    <div className="maindiv">
      {!isSignedIn && (
        <>
          <Homecont />
          <div className="loginbox">
            <div>
              <p className="account-text">USER LOGIN</p>

            
              <form action="POST" className="sign-up-form">
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
                  Sign in
                </button>
                <p className="already">
                  {" "}
                  Don't have an account?{" "}
                  <Link to="createaccount">
                    <a href=" ">Sign up</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </>
      )}
      {isSignedIn && <Dashboard/>}
    </div>
  );
}
export default Signinbox;