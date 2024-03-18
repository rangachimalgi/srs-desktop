import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateReceipt = () => {
  let navigate = useNavigate();
  const [receipts, setReceipts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, and then...
    // Add the new receipt to the list of receipts
    setReceipts([...receipts, formData]);
    // Reset the form data
    setFormData({ name: '', phoneNumber: '' });
  };

  return (
    <div>
      <h1>Create Receipt</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Receipt</button>
      </form>
      <button onClick={() => navigate("/")}>Go Back</button>

      {/* Render the table with the list of receipts */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt, index) => (
            <tr key={index}>
              <td>{receipt.name}</td>
              <td>{receipt.phoneNumber}</td>
              {/* Render additional receipt data here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateReceipt;
