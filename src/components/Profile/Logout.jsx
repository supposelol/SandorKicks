import React, { useState } from "react";
import { useAuth } from "./auth";
import "../Header/Navbar.css";

export const Logout = () => {
    const auth = useAuth();
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handleLogout = () => {
        auth.logout();
        setIsLoggedOut(true);
    };

    return (
        <div>
            <button onClick={handleLogout} className="logout_button">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                <span className="logout_button_text">Logout</span>
            </button>
        </div>
    );
};
