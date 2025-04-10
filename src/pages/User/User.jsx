import React, { useState } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import "./User.css"; 
import Account from "../../components/Account/Account.jsx";

const User = () => {
    return(
        <>
            <div className="main bg-dark">
                <div class="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button class="edit-button">Edit Name</button>
                </div>

                <Account
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                />
                <Account
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                />
                <Account
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                />                
            </div>
        </>
    );
};

export default User;