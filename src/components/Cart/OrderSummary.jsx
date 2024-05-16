import { useNavigate, useLocation } from "react-router-dom";
import TrendingSlider from '../Features/TrendingSlider';
import Newsletter from "../Footer/Newsletter";
import Footer from "../Footer/Footer";
import Lottie from 'react-lottie';
import orderConfirmedAnimation from "../../assets/gif/orderConfirmed.json";
import './OrderSummary.css';

const OrderSummary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems, totalPrice } = location.state || {};

    // Access state from cart
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: orderConfirmedAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
            <div className="motto"><h3>Order Summary</h3></div>
            <div className="order-summary-container">
                <h4 className="order-confirmation-text">Thank you, your order has been placed   </h4>
                <div className="order-details">
                    {cartItems && (
                        <>
                            <div className="order-summary">
                                <h3 className="items-ordered-text">Items ordered</h3>
                                <p>Total Price: ${totalPrice}</p>
                            </div>
                            <div className="order-items">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="cart-item">
                                        <div className="cart-item-details">
                                            <img src={item.image} alt={item.description} className="cart-item-image" />
                                            <div className="cart-item-info">
                                                <h3 className='cart-item-description-text'>{item.description}</h3>
                                                <p>Size: {item.size}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className="order-actions">
                    <div className="order-sum-lottie-container">
                        <Lottie options={defaultOptions} height={150} width={280} />
                    </div>
                    <div className="actions-container">
                        <button onClick={() => navigate("/shoes")}>Continue Shopping</button>
                        <span>Need help? <a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a></span>
                    </div>
                </div>
            </div>
            <br />
            <div className="motto"><h3>You might like these</h3></div>
            <TrendingSlider />
            <Newsletter />
            <Footer />
        </>
    );
};

export default OrderSummary;