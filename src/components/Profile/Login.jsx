import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";
import "./Login-Profile.css";

export const Login = () => {
    const [user, setUser] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // to redirect to profile page after logging in:
    const redirectPath = location.state?.path || "/profile";

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, { replace: true });
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <>
            <div className="motto"><h3>Login</h3></div>
            <div className="login-container">
                <div className="login-form">
                    <p>Log in with whatever, this part is not finished yet.</p>
                    <label>
                        Username:{" "}
                        <input
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            className="login-input"
                            onKeyDown={handleKeyDown}
                        />
                    </label>
                    <button onClick={handleLogin} className="login-button">
                        Login
                    </button>
                </div>
            </div>
        </>
    );
};