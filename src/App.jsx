import React, { useState } from "react";
import "./App.css";
import { FaUser } from "react-icons/fa6";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthDate: "",
    mobileNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the input field is name or surname, restrict input to alphabetic characters only
    if (name === "name" || name === "surname") {
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.surname.trim()) {
      errors.surname = "Surname is required";
    }
    if (!formData.birthDate.trim()) {
      errors.birthDate = "Birth date is required";
    }
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      errors.mobileNumber = "Invalid mobile number";
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with submission
      console.log("Form data:", formData);
      setSubmitted(true); // Set submitted state to true
    } else {
      // Set errors to display to the user
      setErrors(errors);
    }
  };

  return (
    <>
      <div className="header">Card Generator</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Enter Surname"
            value={formData.surname}
            onChange={handleChange}
          />
          {errors.surname && <span className="error">{errors.surname}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Birth Date:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            placeholder="Enter Birth date"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && (
            <span className="error">{errors.birthDate}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter Mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && (
            <span className="error">{errors.mobileNumber}</span>
          )}
        </div>
        <input type="submit" value="GENERATE" />
      </form>

      {submitted && (
        <div className="submitted-data">
          <div className="user">
            <FaUser className="userIcon" />
          </div>
          <div className="data">
            <p>
              Name : <span> {formData.name}</span>
            </p>
            <p>
              Surname : <span> {formData.surname}</span>
            </p>
            <p>
              Birth Date : <span> {formData.birthDate}</span>
            </p>
            <p>
              Mobile Number : <span> {formData.mobileNumber}</span>
            </p>
          </div>
        </div>
      )}
      <div className="footer">Developed By Chetan Chauhan</div>
    </>
  );
};

export default App;
