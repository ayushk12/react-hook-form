import React from "react";
import "./styles.css";
import useForm from "react-hook-form";

function App() {
  const onSubmit = () => {};
  const { register } = useForm();
  return (
    <form className="App" onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" placeholder="lastname" ref={register} />

      <label>Last Name:</label>
      <input name="firstName" placeholder="lastname" ref={register} />

      <label>Gender</label>
      <select name="gender" ref={register}>
        <option>Select...</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label>Username</label>
      <input name="username" placeholder="username" ref={register} />

      <label>Email</label>
      <input name="email" placeholder="email" ref={register} />
      <label>Phone No</label>
      <input name="phoneNo" placeholder="number" ref={register}></input>

      <label>About you</label>
      <textarea
        name="about you"
        placeholder="tell me about yourself"
        ref={register}
      />

      <input type="submit" ref={register} />
    </form>
  );
}

export default App;
