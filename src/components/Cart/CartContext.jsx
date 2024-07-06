import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex(
            (cartItem) =>
                cartItem.id === item.id &&
                cartItem.size === item.size &&
                cartItem.isAccessory === item.isAccessory
        );

        if (existingItemIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingItemIndex].quantity += 1;
            setCartItems(updatedCart);
        } else {
            setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId, size, isAccessory) => {
        const itemIndex = cartItems.findIndex(
            (item) => item.id === itemId && item.size === size && item.isAccessory === isAccessory
        );
        if (itemIndex !== -1) {
            const updatedCart = [...cartItems];
            if (updatedCart[itemIndex].quantity > 1) {
                updatedCart[itemIndex].quantity -= 1;
            } else {
                updatedCart.splice(itemIndex, 1);
            }
            setCartItems(updatedCart);
        }
    };

    const removeAllFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const updateQuantity = (itemId, size, isAccessory, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.size === size && item.isAccessory === isAccessory
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const cartContextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        updateQuantity,
        emptyCart,
        getTotalItems,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};