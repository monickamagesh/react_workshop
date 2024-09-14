import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const check = async () => {
    // Validate inputs
    if (email.trim() === "" && password.trim() === "") {
      alert('Enter Both Email and Password');
      return;
    } else if (email.trim() === "") {
      alert('Enter an Email');
      return;
    } else if (password.trim() === "") {
      alert('Enter a Password');
      return;
    }

    // Prepare data
    const data = { email, password };

    try {
      // Make the API request
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const json = await res.json();

      // Check the response
      if (res.ok) {
        console.log("Login successful");
        alert("Login successful!" );
      } else {
        console.log("Login failed");
        alert("Login failed ")
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='container'>
        <div className='box'>
            
      <h2>LOGIN</h2>
      <input
        type='email'
        placeholder='Enter your email'
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input
        type='password'
        placeholder='Enter the password'
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button onClick={check}>Login</button>
      
      </div>
      <a href='./Register' style={{color:"grey"}}>Don't have an account</a>
      
    </div>
  );
};

export default Login;
