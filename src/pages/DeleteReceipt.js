import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteReceipt = ()=>{
    let navigate = useNavigate();
    return(
        <div>
            <h1>Delete Receipt</h1>
            <button onClick={() => navigate("/")}>Go Back</button>
        </div>
    );
}

export default DeleteReceipt;