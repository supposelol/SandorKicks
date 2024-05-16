import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import "./Login-Profile.css";

export const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate("/");
    };

    return (
        <>
            <div className="motto"><h3>Your Profile</h3></div>
            <div className="profile-container">
                <div className="profile-content">
                    <h2>Welcome {auth.user}</h2>
                    <button onClick={() => navigate("/shoes")} className="cont-shopping-button">Continue Shopping</button>
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};