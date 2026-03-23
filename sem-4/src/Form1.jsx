import { useState } from "react";
import React from "react";

const Form1 = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact]=useState("");
  const [date, setDate]=useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Hello " + fname + " " + lname + "\nYour contact is: " + contact + "\nYour date of birth is: " + date);
  }

  return (
    <div className="gap-2">
      <form onSubmit={handleSubmit}>
        <label type="text">Enter first name:</label>
        <input
          type="text"
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
          placeholder="Enter first name"
        />
        {/* <input type="submit" value="submit"/> */}
        <br/>

        <label type="text">Enter last name:</label>
        <input
          type="text"
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
          }}
          placeholder="Enter last name"
        />
        {/* <input type="submit" value="submit" /> */}
        <br/>

        <label type="text">Enter contact number:</label>
        <input
          type="number"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          placeholder="Enter contact number"
        />
        <br/>

        <label type="text">Enter date of birth:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          placeholder="Enter date of birth"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form1;
