import React from "react";
import { useNavigate } from "react-router-dom";

const DuplicateReceipt = ()=>{
    let navigate = useNavigate();
    return(
        <div>
            <h1>Duplicate Receipt</h1>
            <button onClick={() => navigate("/")}>Go Back</button>
        </div>
    );
}

export default DuplicateReceipt;