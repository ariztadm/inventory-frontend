import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/login");
      console.log("tes1");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(error.response.data.msg);
      }
      console.log("tes1");
    }
  };
  return (
    <>
      <div className="container">
        <div className="LoginForm">
          <p className="has-text-centered">{msg}</p>
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <hr></hr>
            <p>Admin Toko Bu Sri</p>
            <div className="input-box">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confPassword}
                onChange={handleConfPasswordChange}
              />
            </div>
            <button type="submit" className="button">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
