import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import "./SignIn.css"; 

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder login logic
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Remember me:", rememberMe);
        
        // Redirect to user page (update route as needed)
        navigate("/user");
    }
    return(
        <>
            <div className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        </div>

                        <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>

                        <div className="input-remember">
                        <input 
                            type="checkbox" 
                            id="remember-me"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <button type="submit" className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default SignIn;