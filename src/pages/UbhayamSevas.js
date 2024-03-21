import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UbhayamSevas() {
    let navigate = useNavigate();
    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
        // Use IPC to load receipts
        window.api.readReceipts().then((loadedReceipts) => {
            setReceipts(loadedReceipts);
        });
    }, []);

    return (
        <div>
            <button onClick={() => navigate('/')}>Go Back</button>
            <h1>Ubhayam Sevas</h1>
            {receipts.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            {/* Add more headers if you have more data */}
                        </tr>
                    </thead>
                    <tbody>
                        {receipts.map((receipt, index) => (
                            <tr key={index}>
                                <td>{receipt.name}</td>
                                <td>{receipt.phoneNumber}</td>
                                {/* Render more data if available */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No receipts found.</p>
            )}
        </div>
    );
}

export default UbhayamSevas;
