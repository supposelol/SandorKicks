import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Cart.css';
import Lottie from 'react-lottie';
import emptyCartAnimation from '../../assets/gif/emptyCart.json';
import fullCartAnimation from '../../assets/gif/fullCart.json';
import ShoeFlexSlider from '../Features/ShoeFlexSlider';
import TrendingSlider from '../Features/TrendingSlider';
import Newsletter from '../Footer/Newsletter';
import Footer from '../Footer/Footer';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, removeAllFromCart, updateQuantity, emptyCart } = useContext(CartContext);

    // Group items by id
    const groupedCartItems = cartItems.reduce((acc, item) => {
        const existingItem = acc.find(
            (groupedItem) =>
                groupedItem.id === item.id &&
                groupedItem.isAccessory === item.isAccessory
        );
        if (existingItem) {
            existingItem.sizes.push({ size: item.size, quantity: item.quantity });
        } else {
            acc.push({ ...item, sizes: [{ size: item.size, quantity: item.quantity }] });
        }
        return acc;
    }, []);

    // Function to calculate total price
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // If cart is empty, prevent the user from placing an order
    const isCartEmpty = () => {
        return cartItems.length === 0;
    };

    const placeOrder = () => {
        if (!isCartEmpty()) {
            emptyCart();
            // Pass cart items as state to OrderSummary page
            navigate('/order-summary', { state: { cartItems, totalPrice: calculateTotalPrice() } });
        }
    };
    // Lottie options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: emptyCartAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const defaultOptionsFull = {
        loop: true,
        autoplay: true,
        animationData: fullCartAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
            <div className="motto"><h3>Cart</h3></div>
            <div className="cart-container">
                <div>
                    {groupedCartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-details">
                                <img src={item.image} alt={item.description} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h3 className='cart-item-description-text'>{item.description}</h3>
                                    <p>Price: ${item.price}</p>
                                </div>
                            </div>
                            <div className="cart-item-quantity-container">
                                {item.sizes.map((sizeData, index) => (
                                    <div key={index} className="cart-item-quantity">
                                        <span>{sizeData.size} | Quantity:</span>
                                        <button onClick={() => removeFromCart(item.id, sizeData.size, item.isAccessory)}>-</button>
                                        <span>{sizeData.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, sizeData.size, item.isAccessory, sizeData.quantity + 1)}>+</button>
                                    </div>
                                ))}
                                <div className="cart-item-remove-container">
                                    <button className="cart-item-remove" onClick={() => removeAllFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`order-summary ${isCartEmpty() ? 'empty' : ''}`}>
                    {isCartEmpty() ? (
                        <>
                            <Lottie options={defaultOptions} height={200} width={200} />
                            <p className="empty-cart-text">Your cart is Kicks-less!</p>
                        </>
                    ) : (
                        <>
                            <div className="lottie-container">
                                <Lottie options={defaultOptionsFull} height={150} width={150} />
                            </div>
                            <div className="order-summary-content">
                                <h3>Order Summary</h3>
                                <p>Total Price: ${calculateTotalPrice()}</p>
                                <button className="place-order-button" onClick={placeOrder} disabled={cartItems.length === 0}>
                                    Place Order
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="motto2"><h3>How others are wearing it</h3></div>
            <ShoeFlexSlider />
            <div className="motto2"><h3>You might like these</h3></div>
            <TrendingSlider />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Cart;