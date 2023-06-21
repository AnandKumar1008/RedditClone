import React, { useContext, useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MyContext } from "../../App";
const Login = () => {
  const { setShowForm, setLogin,setUserName } = useContext(MyContext);
  const [inp, setInp] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    if(error!=""){
      setError("");
    }
    setInp({ ...inp, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("here");
    const val = localStorage.getItem("reddit_clone");
    const data=JSON.parse(val);
    console.log(data);
    if (data?.includes(inp.username)) {
      setLogin(true);
      setShowForm("none");
      // console.log(inp.username);
      setUserName(inp.username);
      
    }

    setError("invalid username or password");
  };
  return (
    <div className="reddit_clone-login">
      <div className="reddit_clone-login_close">
        <button onClick={() => setShowForm("none")}>X</button>
      </div>
      <div className="reddit_clone-login_container">
        <div className="reddit_clone-login_heading">
          <h3>Log In</h3>
          <p>
            By continuing, you are setting up a Reddit account and agree to our{" "}
            <a href=""> User Agreement </a>
            and <a href=""> Privacy Policy.</a>
          </p>
        </div>
        <div className="reddit_clone-login_shortcut">
          <button>
            <FcGoogle style={{ fontSize: "1rem", marginRight: "2rem" }} />{" "}
            Continue with Google
          </button>
          <button>
            {" "}
            <FaApple style={{ fontSize: "1rem", marginRight: "2rem" }} />{" "}
            Continue with Apple
          </button>
        </div>
        <hr />
        <form className="reddit_clone-login_input" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
            required
            value={inp.username}
          />
          {error && <p>{error}</p>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
            value={inp.password}
          />
          <p>
            Forgot your <a href="">username</a> of <a href="">password </a> ?
          </p>
          <button>Login</button>
        </form>
        <p>
          New to Reddit?{" "}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setShowForm("Signup");
            }}
          >
            signup
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
