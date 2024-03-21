import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fs from "fs";
import path from "path";

const receiptsFilePath = path.join(__dirname, "receipts.json");

const CreateReceipt = () => {
  let navigate = useNavigate();
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    // Use IPC to load receipts
    window.api.readReceipts().then((loadedReceipts) => {
      setReceipts(loadedReceipts);
    });
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedReceipts = [...receipts];
    updatedReceipts[index] = { ...updatedReceipts[index], [name]: value };
    setReceipts(updatedReceipts);
  };

  const handleAddReceipt = () => {
    setReceipts([...receipts, { name: "", phoneNumber: "" }]);
  };

  const handleSaveReceipts = () => {
    // Use IPC to save receipts
    window.api.writeReceipts(receipts).then((wasSuccessful) => {
      if (wasSuccessful) {
        alert("Receipts saved!");
      } else {
        alert("Failed to save receipts.");
      }
    });
  };

  return (
    <div>
      {/* Your form and table as before */}
      <button onClick={handleAddReceipt}>Add New Receipt</button>
      <button onClick={handleSaveReceipts}>Save Receipts</button>
      <button onClick={() => navigate("/")}>Go Back</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={receipt.name}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={receipt.phoneNumber}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateReceipt;
