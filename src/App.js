import React from "react";
import "./styles.css";
import useForm from "react-hook-form";

function App() {
  const onSubmit = () => {};
  return (
    <form className="App" onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" />

      <label>Last Name:</label>
      <input name="firstName" />

      <label>Gender</label>
      <select name="gender">
        <option>Select...</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label>Username</label>
      <input name="username" />

      <label>Email</label>
      <input name="email" />
      <label>Phone No</label>

      <label>About you</label>
      <textarea name="about you" />

      <input type="submit" />
    </form>
  );
}

export default App;
